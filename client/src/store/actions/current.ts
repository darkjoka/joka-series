import { store } from "..";
import { PUSH_DATA, PUSH_LINK } from "../../shared/constants/action";
import { DetailState } from "../../shared/types/types";

export const pushLink = (link: string): void => {
  store.dispatch({ type: PUSH_LINK, payLoad: link });
};

export const pushData = (data: DetailState): void => {
  store.dispatch({ type: PUSH_DATA, payLoad: data });
};
