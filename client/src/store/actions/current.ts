import { PUSH_DATA, PUSH_LINK } from "../../constants/action";
import { DetailState } from "../../shared/types/types";

export const pushLink = (link: string): { type: string; payLoad: string } => {
  return { type: PUSH_LINK, payLoad: link };
};

export const pushData = (data: DetailState): { type: string; payLoad: DetailState } => {
  return { type: PUSH_DATA, payLoad: data };
};
