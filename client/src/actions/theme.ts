import { TOGGLE_DARK, TOGGLE_LIGHT } from "../constants/action";

export const toggleDark = () => {
  return { type: TOGGLE_DARK };
};

export const toggleLight = () => {
  return { type: TOGGLE_LIGHT };
};
