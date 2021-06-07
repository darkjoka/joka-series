import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GENERIC_BACKGROUND } from "../../constants/colors";
import { close, preserveAspectRatio } from "../../constants/svg";
import { RootState } from "../../reducers";
import { closeBottom } from "../../actions/navigation";

const BottomNav: React.FC = () => {
  const bottomNavigation = useSelector(
    (state: RootState) => state.navigation.isBottomSectOpen
  );

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(closeBottom());
  };

  return (
    <StyledNav isBottomNavOpen={bottomNavigation}>
      <InnerNav>
        <Icon onClick={handleClick}>
          <path d={close.path}></path>
        </Icon>
      </InnerNav>
      <Inner></Inner>
    </StyledNav>
  );
};

const StyledNav = styled.div<{ isBottomNavOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: rgba(0, 25, 25, 0.4);
  padding: 0 8px;
  transition: transform 0.3s ease;
  transform: translateY(
    ${({ isBottomNavOpen }) => (isBottomNavOpen ? "0vh" : "100vh")}
  );
`;

const Inner = styled.div`
  background-color: ${GENERIC_BACKGROUND};
  height: 92%;
  border-radius: 26px 26px 0 0;
`;
const InnerNav = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: white;
`;
export { BottomNav };