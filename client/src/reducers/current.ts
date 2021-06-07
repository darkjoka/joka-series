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
  genres: string[];
  descriptioin: string;
  seasonEpisodes: SeasonEpisode[];
}
interface CurrentState {
  link: string;
  detail: DetailState;
}

interface Action {
  type: string;
}

const defaultState: CurrentState = {
  link: "",
  detail: {
    heroImageSource: "",
    genres: [],
    descriptioin: "",
    seasonEpisodes: [],
  },
};

export const current = (
  state: CurrentState = defaultState,
  action: Action
): CurrentState => {
  switch (action.type) {
    default:
      return state;
  }
};
