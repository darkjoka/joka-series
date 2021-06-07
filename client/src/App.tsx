import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import { closeSide } from "./actions/navigation";
import { Layout } from "./components/layout";
import { GENERIC_BACKGROUND } from "./constants/colors";

const App: FC = () => {
  const sideNavState = useSelector(
    (state: RootState) => state.navigation.isSideNavOpen
  );

  const dispatch = useDispatch();

  const handleClick = (): void => {
    if (sideNavState) {
      dispatch(closeSide());
    }
  };

  return (
    <>
      <Main sideNavOpen={sideNavState} onClick={handleClick}>
        <Layout>PlaceHolder Value</Layout>
      </Main>
    </>
  );
};

const navOpenStyles = `
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    position: absolute;
  }
`;

const Main = styled.div<{ sideNavOpen: boolean }>`
  background-color: ${GENERIC_BACKGROUND};
  height: 100vh;

  ${({ sideNavOpen }) => (sideNavOpen ? navOpenStyles : "")}
`;

export default App;
