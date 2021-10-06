import {
  OPEN_SIDE,
  OPEN_BOTTOM,
  CLOSE_BOTTOM,
  CLOSE_SIDE,
} from "../constants/action";

export const openSide = () => {
  return { type: OPEN_SIDE };
};

export const closeSide = () => {
  return { type: CLOSE_SIDE };
};

export const openBottom = () => {
  return { type: OPEN_BOTTOM };
};

export const closeBottom = () => {
  return { type: CLOSE_BOTTOM };
};
