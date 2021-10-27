import React, { useState } from "react";

import Movie from "../../components/Movie";
import { localFetch } from "../../lib/utils-local";

export const History = () => {
  const [movies] = useState(localFetch("history"));
  return (
    <>
      <Movie movies={movies} />
    </>
  );
};
