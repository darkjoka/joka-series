import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populate_index } from "../actions/populate";
import { RootState } from "../reducers";
import { Error } from "./Error";
import { Load } from "./Load";
import { Movie } from "../reducers/indexP";
import MovieDisplay from "./MovieDisplay";

export const IndexList = () => {
  const movies = useSelector((state: RootState) => {
    return state.index;
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handlePopulation = (data: Movie[]): void => {
      dispatch(populate_index(data));
      setLoading(false);
    };

    if (movies.length === 0) {
      setLoading(true);
      setError(false);

      (async () => {
        try {
          const response = await fetch("http://localhost:4000/");
          const result = await response.json();

          handlePopulation(result.data);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      })();
    }

    return () => {
      setLoading(false);
      setError(false);
    }; //set states to defaults on unmount => prevent prob of memory leak
  }, [movies, dispatch]);

  return (
    <>
      {!loading && !error && <MovieDisplay movies={movies} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};
