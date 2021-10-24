import { store } from "..";
import { CHANGE_BRAND_HUE, CHANGE_BRAND_LIGHTNESS, CHANGE_BRAND_SATURATION } from "../../shared/constants/action";

export const changeHue = (hueValue: number): void => {
  store.dispatch({ type: CHANGE_BRAND_HUE, payload: hueValue });
};

export const changeSaturation = (saturationValue: number): void => {
  store.dispatch({ type: CHANGE_BRAND_SATURATION, payload: saturationValue });
};

export const changeLightness = (lightnessValue: number): void => {
  store.dispatch({ type: CHANGE_BRAND_LIGHTNESS, payload: lightnessValue });
};
