import React, { FC } from "react";
import { WHITE, GENERIC_BORDER } from "../../constants/colors";
import styled from "styled-components";

const TopNav: FC = () => {
  return <Nav></Nav>;
};

const Nav = styled.nav`
  height: 64px;
  display: flex;
  transition: transform 0.5s ease-in-out;
  align-items: center;
  justify-items: baseline;
  padding: 0 0.5em;
  position: fixed;
  width: 100%;
  background-color: ${WHITE};
  z-index: 1;
  box-shadow: 0 5px 4px -4px ${GENERIC_BORDER};
  margin: 0;
`;

export { TopNav };
