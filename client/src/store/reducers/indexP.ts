import { POPULATE_INDEX } from "../../shared/constants/action";
import { MovieAction, Movies } from "../../shared/types/types";

const defaultState: Movies = [];

export const index = (state: Movies = defaultState, action: MovieAction) => {
  switch (action.type) {
    case POPULATE_INDEX:
      return action.payLoad;

    default:
      return state;
  }
};
