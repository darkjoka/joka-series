import { Brand, ThemeProperties } from "../shared/types/types";
import { color } from "./base";

export const dim = (brand: Brand): ThemeProperties => {
  return {
    brand: color(brand.hue, brand.saturation / 1.25, brand.lightness / 1.25),
    text1: color(brand.hue, 15, 75),
    text2: color(brand.hue, 10, 61),
    surface1: color(brand.hue, 10, 20),
    surface2: color(brand.hue, 10, 25),
    surface3: color(brand.hue, 5, 30),
    surface4: color(brand.hue, 5, 35),
    surfaceShadow: color(brand.hue, 30, 13),
    shadowStrength: 0.2,
  };
};