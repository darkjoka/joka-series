import { POPULATE_FILTER, POPULATE_INDEX } from "../../shared/constants/action";
import { Movies } from "../../shared/types/types";

export const populate_index = (payLoad: Movies) => {
  return { type: POPULATE_INDEX, payLoad };
};

export const populate_filter = (payLoad: Movies) => {
  return { type: POPULATE_FILTER, payLoad };
};
