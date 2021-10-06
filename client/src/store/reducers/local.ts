import { AUGMENT_FAVORITE, AUGMENT_HISTORY } from "../../constants/action";
import { LocalInterface, MovieAction } from "../../types";

const defaultState: LocalInterface = {
  favorite: [],
  history: [],
};

export const local = (state: LocalInterface = defaultState, action: MovieAction) => {
  switch (action.type) {
    case AUGMENT_FAVORITE:
      return { ...state, favorite: action.payLoad };
    case AUGMENT_HISTORY:
      return { ...state, history: action.payLoad };
    default:
      return state;
  }
};
