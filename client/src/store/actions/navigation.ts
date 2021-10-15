import { store } from "..";
import { OPEN_SIDE, OPEN_BOTTOM, CLOSE_BOTTOM, CLOSE_SIDE } from "../../shared/constants/action";

export const openSide = (): void => {
  store.dispatch({ type: OPEN_SIDE });
};

export const closeSide = (): void => {
  store.dispatch({ type: CLOSE_SIDE });
};

export const openBottom = (): void => {
  store.dispatch({ type: OPEN_BOTTOM });
};

export const closeBottom = (): void => {
  store.dispatch({ type: CLOSE_BOTTOM });
};
