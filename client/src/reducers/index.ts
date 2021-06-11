import { combineReducers } from "redux";
import { navigation } from "./navigation";
import { current } from "./current";
import { theme } from "./theme";
import { index } from "./indexP";

export const rootReducer = combineReducers({
  navigation,
  current,
  theme,
  index,
});

export type RootState = ReturnType<typeof rootReducer>;
