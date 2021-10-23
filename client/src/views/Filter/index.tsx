import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Movie from "../../components/Movie";
import { Load } from "../../components/Load";
import { Error } from "../../elements/Error";
import { RootState } from "../../store/reducers";
import { Movies, ThemeState } from "../../shared/types/types";
import { populate_filter } from "../../store/actions/populate";
interface FilterProp {
  match: { params: { filterItem: string } };
}

export const Filter: React.FC<FilterProp> = ({ match }) => {
  const [movies, theme]: [Movies, ThemeState] = useSelector((state: RootState) => {
    return [state.filter, state.theme];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePopulation = (data: Movies): void => {
    populate_filter(data);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://jokaseries.herokuapp.com/filter/${match.params.filterItem}`);

        const result = await response.json();
        handlePopulation(result.data);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    })();

    return () => {
      setLoading(false);
      setError(false);
    }; //set states to defaults on unmount => prevent prob of memory leak
  }, [movies, match.params.filterItem]);

  return (
    <>
      {!loading && !error && <Movie theme={theme} movies={movies} />}
      {loading && <Load theme={theme} />}
      {error && <Error />}
    </>
  );
};
