import React from "react";
import styled from "styled-components";

const SideNav: React.FC = () => {
  return <StyledNav></StyledNav>;
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

export { SideNav };
