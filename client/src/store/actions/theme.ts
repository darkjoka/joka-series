import { TOGGLE_DARK, TOGGLE_DIM, TOGGLE_LIGHT } from "../../shared/constants/action";
import { store } from "..";
import { getBrand } from "../reducers/theme";

export const toggleDark = (): void => {
  store.dispatch({ type: TOGGLE_DARK, payload: getBrand() });
};

export const toggleLight = (): void => {
  store.dispatch({ type: TOGGLE_LIGHT, payload: getBrand() });
};

export const toggleDim = (): void => {
  store.dispatch({ type: TOGGLE_DIM, payload: getBrand() });
};
