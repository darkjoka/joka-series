import { useSelector } from "react-redux";

import { Load } from "../components/Load";
import Movie from "../components/Movie";
import { Error } from "../elements/Error";
import { useFetch } from "../shared/hooks/useFetch";
import { useLocal } from "../shared/hooks/useLocal";
import { Movies } from "../shared/types/types";
import { populate_index } from "../store/actions/populate";
import { RootState } from "../store/reducers";

const Home = () => {
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

export default Home;
