import { AUGMENT_FAVORITE, AUGMENT_HISTORY } from "../../shared/constants/action";
import { Movies } from "../../shared/types/types";

export const augmentFavorite = (favorites: Movies) => {
  return { type: AUGMENT_FAVORITE, payLoad: favorites };
};

export const augmentHistory = (history: Movies) => {
  return { type: AUGMENT_HISTORY, payLoad: history };
};
