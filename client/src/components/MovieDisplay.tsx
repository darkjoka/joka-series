import React from "react";
import { MovieCard } from "./MovieCard";

interface Movie {
  title: string;
  permaLink: string;
  imageSource: string;
  lastEpisode?: string;
  rating?: string;
  teaser?: string;
}

interface DisplayProps {
  movies: Movie[];
}

const MovieDisplay: React.FC<DisplayProps> = ({ movies }) => {
  return (
    <>
      {movies.map(({ title, permaLink, imageSource, teaser }) => {
        return (
          <MovieCard
            key={permaLink}
            title={title}
            imageSrc={imageSource}
            isBookMarked={false}
            teaser={teaser}
          />
        );
      })}
    </>
  );
};

export default MovieDisplay;