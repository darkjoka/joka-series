import { AUGMENT_FAVORITE, AUGMENT_HISTORY } from "../../shared/constants/action";
import { LocalInterface, MovieAction } from "../../shared/types/types";

const defaultState: LocalInterface = {
  favorite: [],
  history: [],
};

export const local = (state: LocalInterface = defaultState, action: MovieAction) => {
  switch (action.type) {
    case AUGMENT_FAVORITE:
      return { ...state, favorite: action.payload };
    case AUGMENT_HISTORY:
      return { ...state, history: action.payload };
    default:
      return state;
  }
};
