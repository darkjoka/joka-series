import { TOGGLE_DARK, TOGGLE_DIM, TOGGLE_LIGHT } from "../../shared/constants/action";
import { store } from "..";
import { getBrand, getTheme } from "../reducers/theme";
import { Theme } from "../../shared/types/types";

export const toggleDark = (): void => {
  const theme = getTheme();
  if (theme.name !== Theme.dark) {
    store.dispatch({ type: TOGGLE_DARK, payload: getBrand() });
  }
};

export const toggleLight = (): void => {
  const theme = getTheme();
  if (theme.name !== Theme.light) {
    store.dispatch({ type: TOGGLE_LIGHT, payload: getBrand() });
  }
};

export const toggleDim = (): void => {
  const theme = getTheme();
  if (theme.name !== Theme.dim) {
    store.dispatch({ type: TOGGLE_DIM, payload: getBrand() });
  }
};
