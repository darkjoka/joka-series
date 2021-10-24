import { Brand, ThemeProperties } from "../shared/types/types";

export const defaultBrand: Brand = {
  hue: 200,
  saturation: 100,
  lightness: 50,
};

export const color = (hue: number, saturation: number, lighness: number): string => {
  return `hsl(${hue},${saturation}%,${lighness}%)`;
};

export const theme = (identifier: (brand: Brand) => ThemeProperties, brand: Brand) => {
  const selectTheme = identifier(brand);
  return {
    name: selectTheme.name,
    primaryText: selectTheme.text1,
    secondaryText: selectTheme.text2,
    primaryBackground: selectTheme.surface1,
    secondaryBackground: selectTheme.surface2,
  };
};
