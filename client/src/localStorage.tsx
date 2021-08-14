import { Movie } from "./reducers/indexP";

export const localFetch = (store: string): Movie[] => {
  const item = localStorage.getItem(store);

  if (item) {
    return JSON.parse(item);
  }
  return [];
};

export const localSet = (store: string, payLoad: Movie[]): void => {
  localStorage.setItem(store, JSON.stringify(payLoad));
};

export const isLocalEmpty = (store: string): boolean => {
  return Boolean(localStorage.getItem(store));
};

export const localAdd = (
  store: string,
  currMovie: Movie,
  toggle: boolean = true
): Movie[] => {
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
