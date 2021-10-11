import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Movie from "../../components/Movie";
import { Load } from "../../components/Load";
import { Error } from "../../components/Error";
import { RootState } from "../../store/reducers";
import { populate_index } from "../../store/actions/populate";
import { MovieType, ThemeState } from "../../shared/types/types";

export const Home = () => {
  const [movies, theme]: [MovieType[], ThemeState] = useSelector((state: RootState) => {
    return [state.index, state.theme];
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handlePopulation = (data: MovieType[]): void => {
      dispatch(populate_index(data));
      setLoading(false);
    };

    if (movies.length === 0) {
      setLoading(true);
      setError(false);

      (async () => {
        try {
          const response = await fetch("https://jokaseries.herokuapp.com/");
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
      {!loading && !error && <Movie theme={theme} movies={movies} />}
      {loading && <Load theme={theme} />}
      {error && <Error />}
    </>
  );
};
