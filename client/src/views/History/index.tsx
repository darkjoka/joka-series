import React from "react";

import Movie from "../../components/Movie";
import { useLocal } from "../../shared/hooks/useLocal";
import { Movies } from "../../shared/types/types";

export const History = () => {
  const [movies] = useLocal("history", [] as Movies);
  const [local, setLocal] = useLocal("favorite", [] as Movies);
  return (
    <>
      <Movie movies={movies} local={local} setLocal={setLocal} />
    </>
  );
};
