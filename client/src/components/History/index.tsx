import React, { useState } from "react";
import { useSelector } from "react-redux";

import Movie from "../Movie";
import { RootState } from "../../store/reducers";
import { localFetch } from "../../shared/localStorage";

export const History = () => {
  const [movies] = useState(localFetch("history"));
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <>
      <Movie theme={theme} movies={movies} />
    </>
  );
};
