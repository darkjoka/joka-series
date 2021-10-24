import { CHANGE_BRAND_HUE, CHANGE_BRAND_LIGHTNESS, CHANGE_BRAND_SATURATION } from "../../shared/constants/action";
import { Brand, BrandAction } from "../../shared/types/types";

export const brand = (state: Brand, action: BrandAction): Brand => {
  switch (action.type) {
    case CHANGE_BRAND_HUE:
      let brandHue = action.payLoad;
      if (brandHue > 360) {
        brandHue = 360;
      }
      if (brandHue < 0) {
        brandHue = 0;
      }
      return { ...state, hue: brandHue };

    case CHANGE_BRAND_SATURATION:
      let brandSaturation = action.payLoad;
      if (brandSaturation > 100) {
        brandSaturation = 100;
      }
      if (brandSaturation < 0) {
        brandSaturation = 0;
      }
      return { ...state, saturation: brandSaturation };

    case CHANGE_BRAND_LIGHTNESS:
      let brandLightness = action.payLoad;
      if (brandLightness > 100) {
        brandLightness = 100;
      }
      if (brandLightness < 0) {
        brandLightness = 0;
      }
      return { ...state, lightness: brandLightness };

    default:
      return state;
  }
};
