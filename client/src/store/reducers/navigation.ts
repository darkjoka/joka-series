import { CLOSE_BOTTOM, CLOSE_SIDE, OPEN_BOTTOM, OPEN_SIDE } from "../../shared/constants/action";
import { NavState, BaseAction } from "../../shared/types/types";

const defaultState: NavState = {
  isSideNavOpen: false,
  isBottomSectOpen: false,
};

const navigation = (state: NavState = defaultState, action: BaseAction): NavState => {
  switch (action.type) {
    case OPEN_SIDE:
      return { ...state, isSideNavOpen: true };

    case CLOSE_SIDE:
      return { ...state, isSideNavOpen: false };

    case OPEN_BOTTOM:
      return { ...state, isSideNavOpen: false, isBottomSectOpen: true };

    case CLOSE_BOTTOM:
      return { ...state, isBottomSectOpen: false };

    default:
      return state;
  }
};

export { navigation };
