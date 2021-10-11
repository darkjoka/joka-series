import React from "react";
import { ThemeState } from "../../shared/types/types";
import { MovieItemSkeleton } from "../skeleton/MovieItemSkeleton";

const Load: React.FC<{ theme: ThemeState }> = ({ theme }) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13].map((num) => {
        return <MovieItemSkeleton theme={theme} key={num} teaser={true} />;
      })}
    </>
  );
};

export { Load };
