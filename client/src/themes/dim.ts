import { Brand, Theme, ThemeProperties } from "../shared/types/types";
import { color, defaultBrand, theme } from "./base";

const dimColors = (brand: Brand): ThemeProperties => {
  return {
    name: Theme.dim,
    brand: color(brand.hue, brand.saturation / 1.25, brand.lightness / 1.25),
    text1: color(brand.hue, 15, 75),
    text2: color(brand.hue, 10, 65),
    surface1: color(brand.hue, 10, 20),
    surface2: color(brand.hue, 10, 25),
    surface3: color(brand.hue, 5, 23),
    surface4: color(brand.hue, 5, 35),
    surfaceShadow: color(brand.hue, 30, 13),
    shadowStrength: 0.6,
  };
};

export const dim = (brand: Brand = defaultBrand) => {
  return theme(dimColors, brand);
};
