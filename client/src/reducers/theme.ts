import { TOGGLE_LIGHT, TOGGLE_DARK } from "../constants/action";
import {
  DARK_ONE,
  DISCORD_DARK,
  DISCORD_TEXT_ON_DARK,
  DISCORD_YELLOW,
  GENERIC_BACKGROUND,
  GENERIC_BORDER,
} from "../constants/colors";

export interface ThemeState {
  isLight: boolean;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  accentColor: string;
}

interface Action {
  type: string;
}

const defaultState: ThemeState = {
  isLight: true,
  primaryColor: GENERIC_BACKGROUND,
  secondaryColor: DARK_ONE,
  tertiaryColor: GENERIC_BORDER,
  accentColor: DISCORD_YELLOW,
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
        primaryColor: DISCORD_DARK,
        secondaryColor: DISCORD_TEXT_ON_DARK,
        tertiaryColor: DARK_ONE,
      };

    case TOGGLE_LIGHT:
      return {
        ...state,
        isLight: true,
        primaryColor: GENERIC_BACKGROUND,
        secondaryColor: DARK_ONE,
        tertiaryColor: GENERIC_BORDER,
      };

    default:
      return state;
  }
};

export { theme };
