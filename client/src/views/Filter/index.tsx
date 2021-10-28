import React from "react";
import { useSelector } from "react-redux";

import Movie from "../../components/Movie";
import { Load } from "../../components/Load";
import { Error } from "../../elements/Error";
import { RootState } from "../../store/reducers";
import { Movies } from "../../shared/types/types";
import { populate_filter } from "../../store/actions/populate";
import { useLocal } from "../../shared/hooks/useLocal";
import { useFetch } from "../../shared/hooks/useFetch";
interface FilterProp {
  match: { params: { filterItem: string } };
}

export const Filter: React.FC<FilterProp> = ({ match }) => {
  const movies: Movies = useSelector((state: RootState) => state.filter);
  const [local, setLocal] = useLocal("favorite", [] as Movies);
  const link = `https://jokaseries.herokuapp.com/filter/${match.params.filterItem}`;
  const [error, loading] = useFetch(link, populate_filter);

  return (
    <>
      {!loading && !error && <Movie movies={movies} local={local} setLocal={setLocal} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};
