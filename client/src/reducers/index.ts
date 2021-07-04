import { combineReducers } from "redux";
import { navigation } from "./navigation";
import { current } from "./current";
import { theme } from "./theme";
import { index } from "./indexP";
import { local } from "./local";

export const rootReducer = combineReducers({
  navigation,
  current,
  theme,
  index,
  local,
});

export type RootState = ReturnType<typeof rootReducer>;
