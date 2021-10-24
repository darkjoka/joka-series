import { TOGGLE_LIGHT, TOGGLE_DARK, TOGGLE_DIM } from "../../shared/constants/action";
import { BaseAction, Brand, ThemeState } from "../../shared/types/types";
import { themes } from "../../themes";
import { store } from "..";
import { defaultBrand } from "../../themes/base";

const [light, dark, dim] = themes;

const genStore = store.getState();
const brand: Brand = genStore.brand;

const defaultState: ThemeState = light(defaultBrand);

const theme = (state: ThemeState = defaultState, action: BaseAction): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARK:
      return dark(brand);

    case TOGGLE_LIGHT:
      return light(brand);

    case TOGGLE_DIM:
      return dim(brand);

    default:
      return state;
  }
};

export { theme };
