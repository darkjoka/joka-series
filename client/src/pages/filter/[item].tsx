import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Load } from "../../components/Load";
import { Error } from "../../elements/Error";
import Movie from "../../components/Movie";
import { useFetch } from "../../shared/hooks/useFetch";
import { useLocal } from "../../shared/hooks/useLocal";
import { Movies } from "../../shared/types/types";
import { populate_filter } from "../../store/actions/populate";
import { RootState } from "../../store/reducers";

const Filter = () => {
  const {
    query: { item },
  } = useRouter();

  const movies: Movies = useSelector((state: RootState) => state.filter);
  const [local, setLocal] = useLocal("favorite", [] as Movies);
  const link = `https://jokaseries.herokuapp.com/filter/${item}`;
  const [error, loading] = useFetch(link, populate_filter);

  return (
    <>
      {!loading && !error && <Movie movies={movies} local={local} setLocal={setLocal} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};

export default Filter;
