import { POPULATE_INDEX } from "../constants/action";

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

export const index = (state: MovieType = defaultState, action: Action) => {
  switch (action.type) {
    case POPULATE_INDEX:
      return action.payLoad;

    default:
      return state;
  }
};
