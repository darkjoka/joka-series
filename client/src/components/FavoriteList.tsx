import React from "react";
import MovieDisplay from "./MovieDisplay";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { Movie, ThemeState } from "../types";

export const FavoriteList = () => {
  const [theme, favorites]: [ThemeState, Movie[]] = useSelector(
    (state: RootState) => {
      return [state.theme, state.local.favorite];
    }
  );

  return (
    <>
      <MovieDisplay theme={theme} movies={favorites} />
    </>
  );
};
