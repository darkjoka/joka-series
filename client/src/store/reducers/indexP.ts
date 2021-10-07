import { POPULATE_INDEX } from "../../constants/action";
import { MovieAction, MovieType } from "../../shared/types/types";

const defaultState: MovieType = [];

export const index = (state: MovieType = defaultState, action: MovieAction) => {
  switch (action.type) {
    case POPULATE_INDEX:
      return action.payLoad;

    default:
      return state;
  }
};
