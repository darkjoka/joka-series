import { AUGMENT_FAVORITE, AUGMENT_HISTORY } from "../constants/action";
import { Movie } from "./indexP";

interface LocalInterface {
  favorite: Movie[];
  history: Movie[];
}

interface Action {
  type: string;
  payLoad: Movie[];
}
const defaultState: LocalInterface = {
  favorite: [],
  history: [],
};

export const local = (state: LocalInterface = defaultState, action: Action) => {
  switch (action.type) {
    case AUGMENT_FAVORITE:
      return { ...state, favorite: action.payLoad };
    case AUGMENT_HISTORY:
      return { ...state, history: action.payLoad };
    default:
      return state;
  }
};
