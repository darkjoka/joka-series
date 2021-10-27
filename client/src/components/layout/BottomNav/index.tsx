import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { Error } from "../../../elements/Error";
import { MovieDetail } from "../../MovieDetail";
import { RootState } from "../../../store/reducers";
import { close } from "../../../shared/constants/svg";
import { pushData } from "../../../store/actions/current";
import { closeBottom } from "../../../store/actions/navigation";
import { StyledNav, InnerNav, Icon, Inner } from "./BottomNavStyle";
import { DetailState } from "../../../shared/types/types";
import { MovieDetailSkeleton } from "../../skeleton/MovieDetailSkeleton";

const BottomNav: React.FC = () => {
  const [bottomNavigation, link, detail, thumbUrl]: [boolean, string, DetailState, string] = useSelector(
    (state: RootState) => {
      return [state.navigation.isBottomSectOpen, state.current.link, state.current.detail, state.current.thumbUrl];
    }
  );

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (link && bottomNavigation) {
      console.log("here got");
      console.log(thumbUrl);
      const broken = link.split("/");
      const handleCurrent = (data: DetailState): void => {
        pushData(data);
        console.log("also");
        // addToHistory();
        console.log("final");

        setLoading(false);
      };

      setLoading(true);
      setError(false);
      (async () => {
        try {
          const response = await fetch(`https://jokaseries.herokuapp.com/detail/${broken[broken.length - 1]}`);
          const result = await response.json();

          handleCurrent(result.data);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      })();

      return () => {
        setLoading(false);
        setError(false);
      };
    }
  }, [link, bottomNavigation, detail, thumbUrl]);

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
