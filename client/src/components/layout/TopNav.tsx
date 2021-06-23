import React from "react";
import {
  WHITE,
  GENERIC_BORDER,
  DISCORD_DARK,
  DISCORD_TEXT_ON_DARK,
} from "../../constants/colors";
import {
  menu,
  preserveAspectRatio,
  sun,
  moon,
  home,
  bookMarkFilled,
  recent,
} from "../../constants/svg";
import { openSide } from "../../actions/navigation";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../reducers";
import { toggleDark, toggleLight } from "../../actions/theme";
import { device } from "../../constants/device";
import { Link } from "react-router-dom";
import { Section } from "../Section";
import { ThemeProps } from "./SideNav";

const TopNav: React.FC<ThemeProps> = ({ light }) => {
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(openSide());
  };

  const handleDarkToggle = (): void => {
    dispatch(toggleDark());
  };

  const handleLightToggle = (): void => {
    dispatch(toggleLight());
  };

  return (
    <Nav light={light}>
      <Hold>
        <Icon light={light} onClick={handleClick}>
          <path d={menu.path}></path>
        </Icon>
        <BaseSection>
          <Link to="/">
            <Section label={"Home"}>
              <IconSect viewBox={home.viewBox}>
                <path d={home.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/favorite">
            <Section label={"Favorited"}>
              <IconSect viewBox={bookMarkFilled.viewBox}>
                <path d={bookMarkFilled.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/history">
            <Section label={"History"}>
              <IconSect viewBox={recent.viewBox}>
                <path d={recent.path}></path>
              </IconSect>
            </Section>
          </Link>
        </BaseSection>
        {theme.isLight && (
          <ThemeIcon
            light={light}
            viewBox={sun.viewBox}
            onClick={handleDarkToggle}
          >
            <path d={sun.path}></path>
          </ThemeIcon>
        )}

        {theme.isDark && (
          <ThemeIcon
            light={light}
            viewBox={moon.viewBox}
            onClick={handleLightToggle}
          >
            <path d={moon.path}></path>
          </ThemeIcon>
        )}
      </Hold>
    </Nav>
  );
};

const Nav = styled.nav<{ light: boolean }>`
  height: 64px;
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  padding: 0 0.5em;
  position: fixed;
  width: 100%;
  background-color: ${({ light }) => {
    return light ? WHITE : DISCORD_DARK;
  }};
  margin: 0;
  z-index: 1;
  box-shadow: 0 5px 4px -4px ${GENERIC_BORDER};
`;

const Hold = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-items: baseline;
  justify-content: space-between;

  @media ${device.tablet} {
    max-width: 950px;
  }
`;

const Icon = styled.svg.attrs({ viewBox: menu.viewBox, preserveAspectRatio })<{
  light: boolean;
}>`
  width: 48px;
  height: 48px;
  fill: ${({ light }) => {
    return light ? DISCORD_DARK : DISCORD_TEXT_ON_DARK;
  }};

  @media ${device.laptopL} {
    display: none;
  }
`;
const ThemeIcon = styled.svg.attrs({ preserveAspectRatio })<{ light: boolean }>`
  width: 24px;
  height: 24px;
  fill: ${({ light }) => {
    return light ? DISCORD_DARK : DISCORD_TEXT_ON_DARK;
  }};
`;

const IconSect = styled.svg.attrs({ preserveAspectRatio })`
  fill: gainsboro;
  width: 20px;
  height: 20px;
`;
const BaseSection = styled.div`
  justify-content: space-evenly;
  display: none;

  @media ${device.laptopL} {
    display: flex;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
export { TopNav };
