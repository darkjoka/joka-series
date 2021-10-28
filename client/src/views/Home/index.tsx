import React from "react";
import { useSelector } from "react-redux";

import Movie from "../../components/Movie";
import { Load } from "../../components/Load";
import { Error } from "../../elements/Error";
import { RootState } from "../../store/reducers";
import { populate_index } from "../../store/actions/populate";
import { Movies } from "../../shared/types/types";
import { useLocal } from "../../shared/hooks/useLocal";
import { useFetch } from "../../shared/hooks/useFetch";

export const Home = () => {
  const movies: Movies = useSelector((state: RootState) => state.index);
  const [local, setLocal] = useLocal("favorite", [] as Movies);
  const [error, loading] = useFetch("https://jokaseries.herokuapp.com/", populate_index, movies.length === 0);

  return (
    <>
      {!loading && !error && <Movie movies={movies} local={local} setLocal={setLocal} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};
