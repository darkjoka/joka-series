import React from "react";

import MovieDisplay from "../../components/Movie";
import { Movies } from "../../shared/types/types";
import { useLocal } from "../../shared/hooks/useLocal";

export const Favorite = () => {
  const [favorites, setFavorites] = useLocal("favorite", [] as Movies);

  return (
    <>
      <MovieDisplay movies={favorites} local={favorites} setLocal={setFavorites} />
    </>
  );
};
