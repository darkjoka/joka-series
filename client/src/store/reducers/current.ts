import { PUSH_DATA, PUSH_LINK } from "../../constants/action";
import { CurrentState, CurrAction } from "../../types";

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
      return typeof action.payLoad === "string" ? { ...state, link: action.payLoad } : state;

    case PUSH_DATA:
      return typeof action.payLoad === "object" ? { ...state, detail: action.payLoad } : state;

    default:
      return state;
  }
};
