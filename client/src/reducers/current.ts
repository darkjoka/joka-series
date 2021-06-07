interface Episode {
  downloadLink: string;
  size: string;
  title: string;
}

interface SeasonEpisode {
  season: string;
  episodes: Episode[];
}

interface CurrentState {
  link: string;
  heroImageSource: string;
  genres: string[];
  descriptioin: string;
  seasonEpisodes: seasonEpisode[];
}

interface Action {
  type: string;
}

const defaultState: CurrentState = {
  link: "",
  heroImageSource: "",
  genres: [],
  descriptioin: "",
  seasonEpisodes: [],
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
