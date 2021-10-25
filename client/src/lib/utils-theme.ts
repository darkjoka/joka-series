import { store } from "../store";
import { getTheme } from "../store/reducers/theme";

export const getThemeVariables = () => {
  const visual = {
    theme: getTheme(),
  };

  store.subscribe(() => {
    visual.theme = getTheme();
  });

  return visual;
};

/**
 * Add transparency to color value
 * @param  {string} color
 * @param  {number} transparencyValue
 * @return string
 */
export const opacify = (color: string, transparencyValue: number): string => {
  return color.substring(0, color.lastIndexOf(")")) + ` / ${transparencyValue}%)`;
};

/**
 * Lightens color by factor[0-1]
 * @param  {string} color
 * @param  {number} factor
 * @returns string
 */
export const lighten = (color: string, factor: number): string => {
  const charBegin = color.lastIndexOf(" ");
  const charEnd = color.lastIndexOf("%");
  let lightnessValue = parseInt(color.substring(charBegin, charEnd));
  lightnessValue += lightnessValue * (1 - factor);
  if (lightnessValue > 100) lightnessValue = 100;
  if (lightnessValue < 0) lightnessValue = 0;
  return color.substring(0, charBegin) + ` ${lightnessValue}%)`;
};

/**
 * Darkens color by factor[0-1]
 * @param  {string} color
 * @param  {number} factor
 * @returns string
 */
export const darken = (color: string, factor: number): string => {
  const charBegin = color.lastIndexOf(" ");
  const charEnd = color.lastIndexOf("%");
  let lightnessValue = parseInt(color.substring(charBegin, charEnd));
  lightnessValue -= (lightnessValue * (factor * 2)) / 2;
  if (lightnessValue > 100) lightnessValue = 100;
  if (lightnessValue < 0) lightnessValue = 0;
  return color.substring(0, charBegin) + ` ${lightnessValue}%)`;
};
