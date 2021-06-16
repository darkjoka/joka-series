import React from "react";
import { MovieCard } from "./MovieCard";
import { Movie } from "../reducers/indexP";

interface DisplayProps {
  movies: Movie[];
}

const MovieDisplay: React.FC<DisplayProps> = ({ movies }) => {
  return (
    <>
      {movies.map(({ title, permaLink, imageSource, teaser }) => {
        return (
          <MovieCard
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

export default MovieDisplay;
