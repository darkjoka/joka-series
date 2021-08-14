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
