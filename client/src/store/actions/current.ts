import { store } from "..";
import { PUSH_DATA, PUSH_LINK, PUSH_THUMB } from "../../shared/constants/action";
import { DetailState } from "../../shared/types/types";

export const pushLink = (link: string): void => {
  store.dispatch({ type: PUSH_LINK, payload: link });
};

export const pushData = (data: DetailState): void => {
  store.dispatch({ type: PUSH_DATA, payload: data });
};

export const pushThumbUrl = (url: string): void => {
  store.dispatch({ type: PUSH_THUMB, payload: url });
};
