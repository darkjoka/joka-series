import { TOGGLE_LIGHT, TOGGLE_DARK } from "../constants/action";
import {
  DARK_ONE,
  DISCORD_DARK,
  DISCORD_RED,
  GENERIC_BACKGROUND,
  GENERIC_BORDER,
} from "../constants/colors";

export interface ThemeState {
  isLight: boolean;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  gradColor: string;
  accentColor: string;
  shadow: string;
  border: string;
}

interface Action {
  type: string;
}

const defaultState: ThemeState = {
  isLight: true,
  primaryColor: GENERIC_BACKGROUND,
  secondaryColor: DARK_ONE,
  tertiaryColor: GENERIC_BORDER,
  gradColor: GENERIC_BORDER,
  accentColor: DISCORD_RED,
  shadow: GENERIC_BORDER,
  border: "transparent",
};

const theme = (
  state: ThemeState = defaultState,
  action: Action
): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARK:
      return {
        ...state,
        isLight: false,
        primaryColor: DARK_ONE,
        secondaryColor: DISCORD_DARK,
        tertiaryColor: DISCORD_DARK,
        gradColor: DISCORD_DARK,
        shadow: "transparent",
        border: state.accentColor,
      };

    case TOGGLE_LIGHT:
      return {
        ...state,
        isLight: true,
        primaryColor: GENERIC_BACKGROUND,
        secondaryColor: DARK_ONE,
        tertiaryColor: GENERIC_BORDER,
        gradColor: GENERIC_BACKGROUND,
        shadow: GENERIC_BORDER,
        border: "transparent",
      };

    default:
      return state;
  }
};

export { theme };
