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
 * @return {string}
 */
export const opacify = (color: string, transparencyValue: number): string => {
  return color.substring(0, color.lastIndexOf(")")) + ` / ${transparencyValue}%)`;
};
