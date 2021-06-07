import { PUSH_DATA, PUSH_LINK } from "../constants/action";

export const pushLink = (link: string): { type: string; payLoad: string } => {
  return { type: PUSH_LINK, payLoad: link };
};

export const pushData = (data: string) => {
  return { type: PUSH_DATA, payload: data };
};
