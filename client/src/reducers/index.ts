import { combineReducers } from "redux";
import { navigation } from "./navigation";
import { current } from "./current";
import { theme } from "./theme";

export const rootReducer = combineReducers({ navigation, current, theme });

export type RootState = ReturnType<typeof rootReducer>;
