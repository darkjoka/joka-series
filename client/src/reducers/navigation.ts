interface NavState {
  isSideNavOpen: boolean;
  isBottomSectOpen: boolean;
}

interface Action {
  type: string;
}

const defaultState: NavState = {
  isSideNavOpen: false,
  isBottomSectOpen: false,
};

const navigation = (state: NavState = defaultState, action: Action) => {
  return state;
};

export { navigation };
