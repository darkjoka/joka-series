import { Brand, Theme, ThemeProperties } from "../shared/types/types";
import { color, theme } from "./base";

const darkColors = (brand: Brand): ThemeProperties => {
  return {
    name: Theme.dark,
    brand: color(brand.hue, brand.saturation / 2, brand.lightness / 1.5),
    text1: color(brand.hue, 15, 85),
    text2: color(brand.hue, 5, 65),
    surface1: color(brand.hue, 10, 10),
    surface2: color(brand.hue, 10, 15),
    surface3: color(brand.hue, 5, 20),
    surface4: color(brand.hue, 5, 25),
    surfaceShadow: color(brand.hue, 50, 3),
    shadowStrength: 0.8,
  };
};

export const dark = (brand: Brand) => {
  return theme(darkColors, brand);
};
