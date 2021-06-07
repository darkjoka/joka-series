import { combineReducers } from "redux";
import { navigation } from "./navigation";
import { current } from "./current";

export const rootReducer = combineReducers({ navigation, current });

export type RootState = ReturnType<typeof rootReducer>;
