import React, { useEffect, useState } from "react";
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
  const [bottomNavigation, link, detail]: [boolean, string, DetailState] = useSelector((state: RootState) => {
    return [state.navigation.isBottomSectOpen, state.current.link, state.current.detail];
  });

  // const addToHistory = () => {
  //   const [title, imageSource, teaser, permaLink] = [
  //     detail.title,
  //     detail.heroImage,
  //     detail.description,
  //     link,
  //   ];

  //   let history = handleLocalFetch("history");

  //   if (
  //     !history.some((movie) => {
  //       return movie.title === title;
  //     })
  //   ) {
  //     history = history.concat([{ title, imageSource, teaser, permaLink }]);
  //   }
  //   localStorage.setItem("history", JSON.stringify(history)); // update local storage
  // };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (link && bottomNavigation) {
      console.log("here got");
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
  }, [link, bottomNavigation, detail]);

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
