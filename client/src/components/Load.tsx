import React from "react";
import { SMovieCard } from "./skeleton/SMovieCard";

const Load = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((num) => {
        return <SMovieCard key={num} teaser={true} />;
      })}
    </>
  );
};

export { Load };
