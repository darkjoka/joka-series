import { AUGMENT_FAVORITE, AUGMENT_HISTORY } from "../../shared/constants/action";
import { Movie } from "../../shared/types/types";

export const augmentFavorite = (favorites: Movie[]) => {
  return { type: AUGMENT_FAVORITE, payLoad: favorites };
};

export const augmentHistory = (history: Movie[]) => {
  return { type: AUGMENT_HISTORY, payLoad: history };
};
