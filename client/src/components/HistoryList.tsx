import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";
import { handleLocalFetch } from "./MovieCard";

export const HistoryList = () => {
  const [movies] = useState(handleLocalFetch("history"));
  return (
    <>
      <MovieDisplay movies={movies} />
    </>
  );
};
