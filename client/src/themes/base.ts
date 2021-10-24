import { Brand } from "../shared/types/types";

export const brand: Brand = {
  hue: 200,
  saturation: 100,
  lightness: 50,
};

export const color = (hue: number, saturation: number, lighness: number): string => {
  return `hsl(${hue},${saturation}%,${lighness}%)`;
};
