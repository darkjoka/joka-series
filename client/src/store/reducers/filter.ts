import { POPULATE_FILTER } from "../../shared/constants/action";
import { MovieType, MovieAction } from "../../shared/types/types";

const defaultState: MovieType = [];

export const filter = (state: MovieType = defaultState, action: MovieAction) => {
  switch (action.type) {
    case POPULATE_FILTER:
      return action.payLoad;

    default:
      return state;
  }
};
