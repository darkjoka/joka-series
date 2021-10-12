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

export interface MovieType {
  title: string;
  permaLink: string;
  imageSource: string;
  lastEpisode?: string;
  rating?: string;
  teaser?: string;
}

export interface LocalInterface {
  favorite: MovieType[];
  history: MovieType[];
}

export interface NavigationState {
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
  payLoad: MovieType[];
}

export interface CurrAction {
  type: string;
  payLoad: string | DetailState;
}

export type Movies = MovieType[] | [];

export interface Episode {
  episodeTitle: string;
  episodeSize: string;
  episodeDownloadLink: string;
}
export interface AccordionProps {
  index: number;
  value: boolean;
  handleAccordion: (index: number) => void;
  season: string;
  episodes: Episode[];
}

export interface seasonEp {
  seasonEpisode: SeasonEpisode[];
}

export interface MovieProps extends MovieType {
  theme: ThemeState;
}

export interface DisplayProps {
  movies: MovieType[];
  theme: ThemeState;
}

export interface SearchProp {
  match: { params: { searchItem: string } };
}

export interface SectionInterface {
  children: React.ReactNode;
  label: string;
  theme?: ThemeState;
}

export interface MovieCardProps {
  teaser: boolean;
  theme: ThemeState;
}

export interface NavState {
  isSideNavOpen: boolean;
  isBottomSectOpen: boolean;
}
