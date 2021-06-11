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

      fetch("http://localhost:4000/")
        .then((response) => {
          return response.json();
        })

        .then((result) => {
          handlePopulation(result.data);
        })

        .catch((e) => {
          setLoading(false);
          setError(true);
        });
    }
  }, [movies, dispatch]);

  return (
    <>
      {!loading && !error && <MovieDisplay movies={movies} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};
