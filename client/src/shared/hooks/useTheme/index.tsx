import React from "react";
import { store } from "../../../store";
import { getTheme } from "../../../store/reducers/theme";
import { ThemeState } from "../../types/types";

export const useTheme = () => {
  const [theme, setTheme] = React.useState<ThemeState>();

  store.subscribe(() => {
    setTheme(getTheme());
  });
  return [theme, setTheme];
};
