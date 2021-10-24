import { TOGGLE_LIGHT, TOGGLE_DARK, TOGGLE_DIM } from "../../shared/constants/action";
import { Brand, ThemeAction, ThemeState } from "../../shared/types/types";
import { themes } from "../../themes";
import { store } from "..";
import { defaultBrand } from "../../themes/base";

const [light, dark, dim] = themes;

const defaultState: ThemeState = light(defaultBrand);

export const getBrand = (): Brand => {
  const allStore = store.getState();
  return allStore.brand;
};

export const getTheme = (): ThemeState => {
  const allStores = store.getState();
  return allStores.theme;
};

const theme = (state: ThemeState = defaultState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARK:
      return dark(action.payload);

    case TOGGLE_LIGHT:
      return light(action.payload);

    case TOGGLE_DIM:
      return dim(action.payload);

    default:
      return state;
  }
};

export { theme };
