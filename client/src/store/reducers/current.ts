import { PUSH_DATA, PUSH_LINK } from "../../shared/constants/action";
import { CurrentState, CurrAction } from "../../shared/types/types";

const defaultState: CurrentState = {
  link: "",
  detail: {
    title: "",
    heroImage: "",
    genres: [],
    description: "",
    seasonEpisodes: [],
  },
};

export const current = (state: CurrentState = defaultState, action: CurrAction): CurrentState => {
  switch (action.type) {
    case PUSH_LINK:
      return typeof action.payload === "string" ? { ...state, link: action.payload } : state;

    case PUSH_DATA:
      return typeof action.payload === "object" ? { ...state, detail: action.payload } : state;

    default:
      return state;
  }
};
