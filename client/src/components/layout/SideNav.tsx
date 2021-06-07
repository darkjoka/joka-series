import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSide } from "../../actions/navigation";
import { RootState } from "../../reducers";
import styled from "styled-components";
import { preserveAspectRatio, close } from "../../constants/svg";

const SideNav: React.FC = () => {
  const sideNavigation = useSelector(
    (state: RootState) => state.navigation.isSideNavOpen
  );

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(closeSide());
  };

  return (
    <StyledNav sideNavStatus={sideNavigation}>
      <Icon onClick={handleClick}>
        <path d={close.path}></path>
      </Icon>
    </StyledNav>
  );
};

const StyledNav = styled.nav<{ sideNavStatus: boolean }>`
  position: fixed;
  height: 100vh;
  width: 70vw;
  overflow-y: scroll;
  background-color: white;
  transform: translateX(
    ${({ sideNavStatus }) => (sideNavStatus ? "0vw" : "-100vw")}
  );
  transition: transform 0.5s ease-in-out;
  z-index: 2;
  box-shadow: 8px 0px 14px 2px rgba(82, 82, 82, 0.6);
  padding: 12px;
`;

const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: gainsboro;
`;
export { SideNav };
