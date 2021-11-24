import { useLocal } from "../shared/hooks/useLocal";
import { Movies } from "../shared/types/types";
import MovieDisplay from "../components/Movie";

const Favorites = () => {
  const [favorites, setFavorites] = useLocal("favorite", [] as Movies);

  return (
    <>
      <MovieDisplay movies={favorites} local={favorites} setLocal={setFavorites} />
    </>
  );
};

export default Favorites;
