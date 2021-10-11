import React from "react";
import { useSelector } from "react-redux";

import MovieDisplay from "../../components/Movie";
import { RootState } from "../../store/reducers";
import { Movies, ThemeState } from "../../shared/types/types";

export const Favorite = () => {
  const [theme, favorites]: [ThemeState, Movies] = useSelector((state: RootState) => {
    return [state.theme, state.local.favorite];
  });

  return (
    <>
      <MovieDisplay theme={theme} movies={favorites} />
    </>
  );
};
