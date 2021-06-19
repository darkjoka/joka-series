import React from "react";
import { SMovieCard } from "./skeleton/SMovieCard";

const Load = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13].map((num) => {
        return <SMovieCard key={num} teaser={true} />;
      })}
    </>
  );
};

export { Load };
