import Movie from "../../components/Movie";
import { pushLink, pushThumbUrl } from "../../store/actions/current";
import { augmentFavorite } from "../../store/actions/local";
import { openBottom } from "../../store/actions/navigation";
import { Movies, MovieType } from "../types/types";

export const localFetch = (store: string): Movies => {
  // fetch and return movies from specified store
  const item = localStorage.getItem(store);

  if (item) {
    return JSON.parse(item);
  }
  return [];
};

export const localSet = (store: string, payLoad: Movies): void => {
  // set specified store to movies
  localStorage.setItem(store, JSON.stringify(payLoad));
};

export const isLocalEmpty = (store: string): boolean => {
  // return true if specified store is empty and false otherwise
  return Boolean(localStorage.getItem(store));
};

export const localAdd = (store: string, currMovie: MovieType, toggle: boolean = true): Movies => {
  // fetch and add a movie to specified store
  let items: Movies = localFetch(store);

  if (
    items.some((movie) => {
      return movie.title === currMovie.title;
    }) &&
    toggle
  ) {
    items = items.filter((series) => {
      return series.title !== currMovie.title;
    });
  } else {
    items = [{ ...currMovie }].concat(items);
  }

  return items;
};

export const updateLocal = (
  items: Movies,
  store: string,
  callback: (data: Movies) => React.Dispatch<React.SetStateAction<Movies>>
): void => {
  localSet(store, items);
  callback(items);
};

const syncLocal = (movies: Movies): void => {
  // syncs app state with localStorage
  augmentFavorite(movies);
};

// export const handleBookmark = ({ title, teaser, permaLink, imageSource }): void => {
//   let favorites = localAdd("favorite", {
//     title,
//     teaser,
//     permaLink,
//     imageSource,
//   });
//   //   updateLocal(favorites, "favorite");
//   syncLocal(favorites);
// };
