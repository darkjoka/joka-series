import { POPULATE_INDEX } from "../constants/action";
import { Movie } from "../reducers/indexP";

export const populate_index = (payLoad: Movie[]) => {
  return { type: POPULATE_INDEX, payLoad };
};
