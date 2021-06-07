import React from "react";
import styled from "styled-components";
import { GENERIC_BACKGROUND } from "../../constants/colors";

const BottomNav: React.FC = () => {
  return (
    <StyledNav>
      <Inner></Inner>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: white;
`;

const Inner = styled.div`
  background-color: ${GENERIC_BACKGROUND};
  height: 100%;
`;

export { BottomNav };
