import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";
import { handleLocalFetch } from "./MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

export const FavoriteList = () => {
  const [movies] = useState(handleLocalFetch("favorite"));
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <>
      <MovieDisplay theme={theme} movies={movies} />
    </>
  );
};
