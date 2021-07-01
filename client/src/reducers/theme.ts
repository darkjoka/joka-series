import { TOGGLE_LIGHT, TOGGLE_DARK } from "../constants/action";
import {
  DARK_ONE,
  DISCORD_DARK,
  DISCORD_RED,
  DISCORD_TEXT_ON_DARK,
  GENERIC_BACKGROUND,
  GENERIC_BORDER,
  WHITE,
} from "../constants/colors";

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

interface Action {
  type: string;
}

const defaultState: ThemeState = {
  isLight: true,
  primBG: GENERIC_BACKGROUND,
  primaryColor: WHITE,
  primaryInverse: DARK_ONE,
  secondaryColor: DARK_ONE,
  secondaryInverse: GENERIC_BACKGROUND,
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
        primBG: DARK_ONE,
        primaryColor: DARK_ONE,
        primaryInverse: DISCORD_TEXT_ON_DARK,
        secondaryColor: DISCORD_DARK,
        secondaryInverse: GENERIC_BACKGROUND,
        tertiaryColor: DISCORD_DARK,
        gradColor: DISCORD_DARK,
        shadow: "transparent",
        border: state.accentColor,
      };

    case TOGGLE_LIGHT:
      return {
        ...state,
        isLight: true,
        primBG: GENERIC_BACKGROUND,
        primaryColor: WHITE,
        primaryInverse: DARK_ONE,
        secondaryColor: DARK_ONE,
        secondaryInverse: GENERIC_BACKGROUND,
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
