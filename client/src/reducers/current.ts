import { PUSH_DATA, PUSH_LINK } from "../constants/action";

interface Episode {
  downloadLink: string;
  size: string;
  title: string;
}

interface SeasonEpisode {
  season: string;
  episodes: Episode[];
}

export interface DetailState {
  heroImageSource: string;
  genres: string;
  description: string;
  seasonEpisodes: SeasonEpisode[];
  title: string;
}
export interface CurrentState {
  link: string;
  detail: DetailState;
}

interface Action {
  type: string;
  payLoad: string | DetailState;
}

const defaultState: CurrentState = {
  link: "",
  detail: {
    title: "",
    heroImageSource: "",
    genres: "",
    description: "",
    seasonEpisodes: [],
  },
};

export const current = (
  state: CurrentState = defaultState,
  action: Action
): CurrentState => {
  switch (action.type) {
    case PUSH_LINK:
      return typeof action.payLoad === "string"
        ? { ...state, link: action.payLoad }
        : state;

    case PUSH_DATA:
      return typeof action.payLoad === "object"
        ? { ...state, detail: action.payLoad }
        : state;

    default:
      return state;
  }
};
