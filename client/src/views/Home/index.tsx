import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Movie from "../../components/Movie";
import { Load } from "../../components/Load";
import { Error } from "../../elements/Error";
import { RootState } from "../../store/reducers";
import { populate_index } from "../../store/actions/populate";
import { MovieType, ThemeState } from "../../shared/types/types";

export const Home = () => {
  const [movies, theme]: [MovieType[], ThemeState] = useSelector((state: RootState) => {
    return [state.index, state.theme];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePopulation = (data: MovieType[]): void => {
    populate_index(data);
    setLoading(false);
  };

  useEffect(() => {
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
  }, [movies]);

  return (
    <>
      {!loading && !error && <Movie theme={theme} movies={movies} />}
      {loading && <Load theme={theme} />}
      {error && <Error />}
    </>
  );
};
