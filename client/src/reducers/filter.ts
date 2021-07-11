import { POPULATE_FILTER } from "../constants/action";

export interface Movie {
  title: string;
  permaLink: string;
  imageSource: string;
  lastEpisode?: string;
  rating?: string;
  teaser?: string;
}

interface Action {
  type: string;
  payLoad: Movie[];
}

type MovieType = Movie[] | [];

const defaultState: MovieType = [];

export const filter = (state: MovieType = defaultState, action: Action) => {
  switch (action.type) {
    case POPULATE_FILTER:
      return action.payLoad;

    default:
      return state;
  }
};
