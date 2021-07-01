import React from "react";
import { MovieCard } from "./MovieCard";
import { Movie } from "../reducers/indexP";
import { ThemeState } from "../reducers/theme";

interface DisplayProps {
  movies: Movie[];
  theme: ThemeState;
}

const MovieDisplay: React.FC<DisplayProps> = ({ movies, theme }) => {
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

export default MovieDisplay;
