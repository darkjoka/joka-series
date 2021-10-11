import React from "react";
import MovieDisplay from "../Movie";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Movie, ThemeState } from "../../shared/types/types";

export const Favorite = () => {
  const [theme, favorites]: [ThemeState, Movie[]] = useSelector((state: RootState) => {
    return [state.theme, state.local.favorite];
  });

  return (
    <>
      <MovieDisplay theme={theme} movies={favorites} />
    </>
  );
};
