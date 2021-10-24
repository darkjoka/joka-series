import { Brand, ThemeProperties, ThemeState } from "../shared/types/types";

export const defaultBrand: Brand = {
  hue: 200,
  saturation: 100,
  lightness: 50,
};

export const color = (hue: number, saturation: number, lightness: number): string => {
  return `hsl(${hue}deg ${saturation}% ${lightness}%)`;
};

export const theme = (identifier: (brand: Brand) => ThemeProperties, brand: Brand): ThemeState => {
  const selectTheme = identifier(brand);
  return {
    name: selectTheme.name,
    brand: selectTheme.brand,
    primaryText: selectTheme.text1,
    secondaryText: selectTheme.text2,
    primaryBackground: selectTheme.surface1,
    secondaryBackground: selectTheme.surface2,
  };
};
