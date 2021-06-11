import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";
import { handleLocalFetch } from "./MovieCard";

export const FavoriteList = () => {
  const [movies] = useState(handleLocalFetch);

  return (
    <>
      <MovieDisplay movies={movies} />
    </>
  );
};
