import React, { useState } from "react";
import MovieDisplay from "../MovieDisplay";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { localFetch } from "../../shared/localStorage";

export const HistoryList = () => {
  const [movies] = useState(localFetch("history"));
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <>
      <MovieDisplay theme={theme} movies={movies} />
    </>
  );
};
