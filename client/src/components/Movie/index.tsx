import React from "react";

import { MovieItem } from "../../elements/MovieItem";
import { DisplayProps } from "../../shared/types/types";

const Movie: React.FC<DisplayProps> = ({ movies, local, setLocal }) => {
  return (
    <>
      {movies.map(({ title, permaLink, imageSource, teaser }) => {
        return (
          <MovieItem
            permaLink={permaLink}
            key={permaLink}
            title={title}
            imageSource={imageSource}
            teaser={teaser}
            local={local}
            setLocal={setLocal}
          />
        );
      })}
    </>
  );
};

export default Movie;
