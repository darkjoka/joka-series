import React from "react";

import { MovieItemSkeleton } from "../skeleton/MovieItemSkeleton";

const Load: React.FC = () => {
  return (
    <>
      {[...Array(13)].map((_, idx) => {
        return <MovieItemSkeleton key={idx} teaser={true} />;
      })}
    </>
  );
};

export { Load };
