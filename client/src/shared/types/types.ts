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
  thumbUrl: string;
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
  name: Theme;
  brand: string;
  primaryText: string;
  secondaryText: string;
  primaryBackground: string;
  secondaryBackground: string;
  tertiaryBackground: string;
  altBackground: string;
  shadow: string;
  shadowStrength: number;
}

export interface BaseAction {
  type: string;
}

export interface ThemeAction extends BaseAction {
  payload: Brand;
}

export interface MovieAction extends BaseAction {
  payload: MovieType[];
}
export interface CurrAction extends BaseAction {
  payload: string | DetailState;
}

export interface BrandAction extends BaseAction {
  payload: number;
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
  local: Movies;
  setLocal: (value: Movies) => void;
}

export interface DisplayProps {
  movies: MovieType[];
  local: Movies;
  setLocal: (value: Movies) => void;
}

export interface SearchProp {
  match: { params: { searchItem: string } };
}

export interface SectionInterface {
  children: React.ReactNode;
  label: string;
}

export interface MovieCardProps {
  teaser: boolean;
}

export interface NavState {
  isSideNavOpen: boolean;
  isBottomSectOpen: boolean;
}

export interface Brand {
  hue: number;
  saturation: number;
  lightness: number;
}

export interface ThemeProperties {
  name: Theme;
  brand: string;
  text1: string;
  text2: string;
  surface1: string;
  surface2: string;
  surface3: string;
  surface4: string;
  surfaceShadow: string;
  shadowStrength: number;
}

export enum Theme {
  light,
  dark,
  dim,
}
