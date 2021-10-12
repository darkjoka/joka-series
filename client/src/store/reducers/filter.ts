import { POPULATE_FILTER } from "../../shared/constants/action";
import { Movies, MovieAction } from "../../shared/types/types";

const defaultState: Movies = [];

export const filter = (state: Movies = defaultState, action: MovieAction) => {
  switch (action.type) {
    case POPULATE_FILTER:
      return action.payLoad;

    default:
      return state;
  }
};
