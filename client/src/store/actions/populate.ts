import { store } from "..";
import { POPULATE_FILTER, POPULATE_INDEX } from "../../shared/constants/action";
import { Movies } from "../../shared/types/types";

export const populate_index = (payLoad: Movies): void => {
  store.dispatch({ type: POPULATE_INDEX, payLoad });
};

export const populate_filter = (payLoad: Movies): void => {
  store.dispatch({ type: POPULATE_FILTER, payLoad });
};
