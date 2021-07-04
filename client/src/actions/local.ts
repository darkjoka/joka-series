import { AUGMENT_FAVORITE, AUGMENT_HISTORY } from "../constants/action";
import { Movie } from "../reducers/indexP";

export const augmentFavorite = (favorites: Movie[]) => {
  return { type: AUGMENT_FAVORITE, payLoad: favorites };
};

export const augmentHistory = (history: Movie[]) => {
  return { type: AUGMENT_HISTORY, payLoad: history };
};
