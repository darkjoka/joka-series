import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { Error } from "../../../elements/Error";
import { MovieDetail } from "../../MovieDetail";
import { RootState } from "../../../store/reducers";
import { close } from "../../../shared/constants/svg";
import { pushData } from "../../../store/actions/current";
import { closeBottom } from "../../../store/actions/navigation";
import { StyledNav, InnerNav, Icon, Inner } from "./style";
import { DetailState } from "../../../shared/types/types";
import { MovieDetailSkeleton } from "../../skeleton/MovieDetailSkeleton";
import { useFetch } from "../../../shared/hooks/useFetch";

let prevlink: string;

const BottomNav: React.FC = () => {
  const [bottomNavigation, link, detail]: [boolean, string, DetailState] = useSelector((state: RootState) => {
    return [state.navigation.isBottomSectOpen, state.current.link, state.current.detail];
  });

  const permalink = `https://jokaseries.herokuapp.com/detail/${link}`;
  const [error, loading] = useFetch(permalink, pushData, prevlink === link); // only load new data if prevlink is not current link
  prevlink = link;

  return createPortal(
    <StyledNav isBottomNavOpen={bottomNavigation}>
      <InnerNav>
        <Icon onClick={closeBottom}>
          <path d={close.path}></path>
        </Icon>
      </InnerNav>
      <Inner>
        {!loading && !error && <MovieDetail {...detail} />}
        {loading && <MovieDetailSkeleton />}
        {error && <Error />}
      </Inner>
    </StyledNav>,
    document.getElementById("bottom") as HTMLElement
  );
};

export { BottomNav };
