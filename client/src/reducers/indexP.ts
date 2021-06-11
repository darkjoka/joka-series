import { POPULATE_INDEX } from "../constants/action";

export interface Movie {
  title: String;
  permaLink: String;
  imageSource: String;
  lastEpisode?: string;
  rating?: String;
  teaser?: String;
}

interface Action {
  type: string;
  payLoad: Movie[];
}

type MovieType = Movie[] | [];

const defaultState: MovieType = [];

export const index = (state: MovieType = defaultState, action: Action) => {
  switch (action.type) {
    case POPULATE_INDEX:
      return action.payLoad;

    default:
      return state;
  }
};
