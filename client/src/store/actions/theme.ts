import { TOGGLE_DARK, TOGGLE_DIM, TOGGLE_LIGHT } from "../../shared/constants/action";
import { store } from "..";

export const toggleDark = (): void => {
  store.dispatch({ type: TOGGLE_DARK });
};

export const toggleLight = (): void => {
  store.dispatch({ type: TOGGLE_LIGHT });
};

export const toggleDim = (): void => {
  store.dispatch({ type: TOGGLE_DIM });
};
