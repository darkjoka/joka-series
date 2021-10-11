import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { populate_filter } from "../../store/actions/populate";
import { RootState } from "../../store/reducers";
import { Load } from "../Load";
import Movie from "../Movie";
import { Error } from "../Error";
import { Movies, ThemeState } from "../../shared/types/types";
interface FilterListProp {
  match: { params: { filterItem: string } };
}

export const Filter: React.FC<FilterListProp> = ({ match }) => {
  const [movies, theme]: [Movies, ThemeState] = useSelector((state: RootState) => {
    return [state.filter, state.theme];
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handlePopulation = (data: Movies): void => {
      dispatch(populate_filter(data));
      setLoading(false);
    };

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
  }, [movies, dispatch, match.params.filterItem]);

  return (
    <>
      {!loading && !error && <Movie theme={theme} movies={movies} />}
      {loading && <Load theme={theme} />}
      {error && <Error />}
    </>
  );
};
