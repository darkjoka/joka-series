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
