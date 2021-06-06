import React from "react";
import styled from "styled-components";
import { preserveAspectRatio, close } from "../../constants/svg";

const SideNav: React.FC = () => {
  return (
    <StyledNav>
      <Icon>
        <path d={close.path}></path>
      </Icon>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  height: 100vh;
  width: 70vw;
  overflow-y: scroll;
  background-color: white;
  transform: translateX(-100vw);
  transition: transform 0.5s ease-in-out;
  z-index: 2;
  box-shadow: 8px 0px 14px 2px rgba(82, 82, 82, 0.6);
  padding: 12px;
`;

const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })`
  width: 24px;
  height: 24px;
  fill: gainsboro;
`;
export { SideNav };
