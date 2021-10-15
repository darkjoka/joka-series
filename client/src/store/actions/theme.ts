import { TOGGLE_DARK, TOGGLE_LIGHT } from "../../shared/constants/action";
import { store } from "..";

export const toggleDark = (): void => {
  store.dispatch({ type: TOGGLE_DARK });
};

export const toggleLight = (): void => {
  store.dispatch({ type: TOGGLE_LIGHT });
};
