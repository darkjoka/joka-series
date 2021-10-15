import { store } from "..";
import { AUGMENT_FAVORITE, AUGMENT_HISTORY } from "../../shared/constants/action";
import { Movies } from "../../shared/types/types";

export const augmentFavorite = (favorites: Movies): void => {
  store.dispatch({ type: AUGMENT_FAVORITE, payLoad: favorites });
};

export const augmentHistory = (history: Movies): void => {
  store.dispatch({ type: AUGMENT_HISTORY, payLoad: history });
};
