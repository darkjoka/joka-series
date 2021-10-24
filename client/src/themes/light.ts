import { Brand, Theme, ThemeProperties } from "../shared/types/types";
import { color, defaultBrand, theme } from "./base";

const lightColors = (brand: Brand): ThemeProperties => {
  return {
    name: Theme.light,
    brand: color(brand.hue, brand.saturation, brand.lightness),
    text1: color(brand.hue, brand.saturation, 10),
    text2: color(brand.hue, 30, 30),
    surface1: color(brand.hue, 25, 90),
    surface2: color(brand.hue, 20, 99),
    surface3: color(brand.hue, 20, 92),
    surface4: color(brand.hue, 20, 85),
    surfaceShadow: color(brand.hue, 10, 20),
    shadowStrength: 0.2,
  };
};

export const light = (brand: Brand = defaultBrand) => {
  return theme(lightColors, brand);
};
