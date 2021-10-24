import React from "react";
import { useSelector } from "react-redux";

import Movie from "../../components/Movie";
import { Load } from "../../components/Load";
import { Error } from "../../elements/Error";
import { RootState } from "../../store/reducers";
import { Movies } from "../../shared/types/types";
import { populate_filter } from "../../store/actions/populate";
interface FilterProp {
  match: { params: { filterItem: string } };
}

export const Filter: React.FC<FilterProp> = ({ match }) => {
  const movies: Movies = useSelector((state: RootState) => state.filter);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handlePopulation = (data: Movies): void => {
    populate_filter(data);
    setLoading(false);
  };

  React.useEffect(() => {
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
      {!loading && !error && <Movie movies={movies} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};
