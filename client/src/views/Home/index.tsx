import React from "react";
import { useSelector } from "react-redux";

import Movie from "../../components/Movie";
import { Load } from "../../components/Load";
import { Error } from "../../elements/Error";
import { RootState } from "../../store/reducers";
import { populate_index } from "../../store/actions/populate";
import { Movies } from "../../shared/types/types";

export const Home = () => {
  const movies: Movies = useSelector((state: RootState) => state.index);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handlePopulation = (data: Movies): void => {
    populate_index(data);
    setLoading(false);
  };

  React.useEffect(() => {
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
      {!loading && !error && <Movie movies={movies} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};
