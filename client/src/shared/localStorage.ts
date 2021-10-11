import { Movie } from "./types/types";

export const localFetch = (store: string): Movie[] => {
  // fetch and return movies from specified store
  const item = localStorage.getItem(store);

  if (item) {
    return JSON.parse(item);
  }
  return [];
};

export const localSet = (store: string, payLoad: Movie[]): void => {
  // set specified store to movies
  localStorage.setItem(store, JSON.stringify(payLoad));
};

export const isLocalEmpty = (store: string): boolean => {
  // return true if specified store is empty and false otherwise
  return Boolean(localStorage.getItem(store));
};

export const localAdd = (store: string, currMovie: Movie, toggle: boolean = true): Movie[] => {
  // fetch and add a movie to specified store
  let items: Movie[] = localFetch(store);

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
