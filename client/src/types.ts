export interface Episode {
  episodeTitle: string;
  episodeSize: string;
  episodeDownloadLink: string;
}

export interface SeasonEpisode {
  season: string;
  episodes: Episode[];
}

export interface DetailState {
  heroImage: string;
  genres: string[];
  description: string;
  seasonEpisodes: SeasonEpisode[];
  title: string;
}
export interface CurrentState {
  link: string;
  detail: DetailState;
}

export interface Movie {
  title: string;
  permaLink: string;
  imageSource: string;
  lastEpisode?: string;
  rating?: string;
  teaser?: string;
}

export interface LocalInterface {
  favorite: Movie[];
  history: Movie[];
}

export interface NavState {
  isSideNavOpen: boolean;
  isBottomSectOpen: boolean;
}

export interface ThemeState {
  isLight: boolean;
  primaryColor: string;
  primaryInverse: string;
  secondaryColor: string;
  secondaryInverse: string;
  tertiaryColor: string;
  gradColor: string;
  accentColor: string;
  shadow: string;
  border: string;
  primBG: string;
}

export interface BaseAction {
  type: string;
}

export interface MovieAction {
  type: string;
  payLoad: Movie[];
}

export interface CurrAction {
  type: string;
  payLoad: string | DetailState;
}

export type MovieType = Movie[] | [];
