import React from "react";
import { DisplayProps } from "../../shared/types/types";
import { MovieCard } from "../MovieCard";

const Movie: React.FC<DisplayProps> = ({ movies, theme }) => {
  return (
    <>
      {movies.map(({ title, permaLink, imageSource, teaser }) => {
        return (
          <MovieCard
            theme={theme}
            permaLink={permaLink}
            key={permaLink}
            title={title}
            imageSource={imageSource}
            teaser={teaser}
          />
        );
      })}
    </>
  );
};

export default Movie;
