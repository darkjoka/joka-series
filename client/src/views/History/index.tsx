import React, { useState } from "react";

import Movie from "../../components/Movie";
import { localFetch } from "../../shared/lib/local-utils";

export const History = () => {
  const [movies] = useState(localFetch("history"));
  return (
    <>
      <Movie movies={movies} />
    </>
  );
};
