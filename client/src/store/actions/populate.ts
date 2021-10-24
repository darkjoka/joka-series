import { store } from "..";
import { POPULATE_FILTER, POPULATE_INDEX } from "../../shared/constants/action";
import { Movies } from "../../shared/types/types";

export const populate_index = (payload: Movies): void => {
  store.dispatch({ type: POPULATE_INDEX, payload });
};

export const populate_filter = (payload: Movies): void => {
  store.dispatch({ type: POPULATE_FILTER, payload });
};
