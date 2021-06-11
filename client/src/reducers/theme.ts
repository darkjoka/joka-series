import { TOGGLE_LIGHT, TOGGLE_DARK } from "../constants/action";

interface ThemeState {
  isLight: boolean;
  isDark: boolean;
}

interface Action {
  type: string;
}

const defaultState: ThemeState = {
  isLight: true,
  isDark: false,
};

const theme = (
  state: ThemeState = defaultState,
  action: Action
): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARK:
      return { isLight: false, isDark: true };

    case TOGGLE_LIGHT:
      return { isLight: true, isDark: false };

    default:
      return state;
  }
};

export { theme };
