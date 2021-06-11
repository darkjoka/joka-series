import React from "react";
import { WHITE, GENERIC_BORDER } from "../../constants/colors";
import { menu, preserveAspectRatio, sun, moon } from "../../constants/svg";
import { openSide } from "../../actions/navigation";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const TopNav: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openSide());
  };

  return (
    <Nav>
      <Icon onClick={handleClick}>
        <path d={menu.path}></path>
      </Icon>
      {?<ThemeIcon viewBox={sun.viewBox}><path d={sun.path}></path></ThemeIcon>:<ThemeIcon viewBox={moon.viewBox}><path d={moon.path}></path></ThemeIcon>}
    </Nav>
  );
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

const Icon = styled.svg.attrs({ viewBox: menu.viewBox, preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: gainsboro;
`;
const ThemeIcon = styled.svg.attrs({ preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: gainsboro;
`;
export { TopNav };
