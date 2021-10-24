import { combineReducers } from "redux";
import { navigation } from "./navigation";
import { current } from "./current";
import { theme } from "./theme";
import { index } from "./indexP";
import { local } from "./local";
import { filter } from "./filter";
import { brand } from "./brand";

export const rootReducer = combineReducers({
  navigation,
  current,
  theme,
  index,
  local,
  filter,
  brand,
});

export type RootState = ReturnType<typeof rootReducer>;
