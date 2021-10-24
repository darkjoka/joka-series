import { TOGGLE_LIGHT, TOGGLE_DARK, TOGGLE_DIM } from "../../shared/constants/action";
import { BaseAction, Brand, ThemeState } from "../../shared/types/types";
import { themes } from "../../themes";
import { store } from "..";
import { defaultBrand } from "../../themes/base";

const [light, dark, dim] = themes;

const defaultState: ThemeState = light(defaultBrand);

const getBrand = (): Brand => {
  const allStore = store.getState();
  return allStore.brand;
};

export const getTheme = (): ThemeState => {
  const allStores = store.getState();
  return allStores.theme;
};

const theme = (state: ThemeState = defaultState, action: BaseAction): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARK:
      return dark(getBrand());

    case TOGGLE_LIGHT:
      return light(getBrand());

    case TOGGLE_DIM:
      return dim(getBrand());

    default:
      return state;
  }
};

export { theme };
