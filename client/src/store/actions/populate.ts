import { POPULATE_FILTER, POPULATE_INDEX } from "../../shared/constants/action";
import { Movie } from "../../shared/types/types";

export const populate_index = (payLoad: Movie[]) => {
  return { type: POPULATE_INDEX, payLoad };
};

export const populate_filter = (payLoad: Movie[]) => {
  return { type: POPULATE_FILTER, payLoad };
};
