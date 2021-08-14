import { Movie } from "./reducers/indexP";

export const localFetch = (store: string): Movie[] => {
  const item = localStorage.getItem(store);
  if (item) {
    return JSON.parse(item);
  }
  return [];
};
