import React from "react";
import { useSelector } from "react-redux";

import MovieDisplay from "../../components/Movie";
import { RootState } from "../../store/reducers";
import { Movies } from "../../shared/types/types";

export const Favorite = () => {
  const favorites: Movies = useSelector((state: RootState) => state.local.favorite);

  return (
    <>
      <MovieDisplay movies={favorites} />
    </>
  );
};
