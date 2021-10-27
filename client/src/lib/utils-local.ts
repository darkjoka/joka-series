import { Movies, MovieType } from "../shared/types/types";

export const localFetch = <T>(store: string, defaultState: T): T => {
  // fetch and return item(s) of type T from specified store
  const item = localStorage.getItem(store);

  if (item) {
    return JSON.parse(item);
  }
  return defaultState;
};

export const localSet = <T>(store: string, value: T): void => {
  // set store to item(s) of type T
  localStorage.setItem(store, JSON.stringify(value));
};

export const localToggle = (store: string, curr: MovieType, local: Movies): Movies => {
  if (local.some((movie) => movie.title === curr.title)) {
    local = local.filter((series) => {
      return series.title !== curr.title;
    });
  } else {
    local = [{ ...curr }].concat(local);
  }
  return local;
};
