import React from "react";
import { menu, preserveAspectRatio, sun, moon, home, bookMarkFilled, recent } from "../../constants/svg";
import { openSide } from "../../store/actions/navigation";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/reducers";
import { toggleDark, toggleLight } from "../../store/actions/theme";
import { device } from "../../constants/device";
import { Link } from "react-router-dom";
import { Section } from "../Section";
import { ThemeState } from "../../types";

const TopNav: React.FC = () => {
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
    <Nav theme={theme}>
      <Hold>
        <Icon theme={theme} onClick={handleClick}>
          <path d={menu.path}></path>
        </Icon>
        <BaseSection theme={theme}>
          <Link to="/">
            <Section theme={theme} label={"Home"}>
              <IconSect theme={theme} viewBox={home.viewBox}>
                <path d={home.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/favorite">
            <Section theme={theme} label={"Favorited"}>
              <IconSect theme={theme} viewBox={bookMarkFilled.viewBox}>
                <path d={bookMarkFilled.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/history">
            <Section theme={theme} label={"History"}>
              <IconSect theme={theme} viewBox={recent.viewBox}>
                <path d={recent.path}></path>
              </IconSect>
            </Section>
          </Link>
        </BaseSection>
        {theme.isLight && (
          <ThemeIcon theme={theme} viewBox={sun.viewBox} onClick={handleDarkToggle}>
            <path d={sun.path}></path>
          </ThemeIcon>
        )}

        {!theme.isLight && (
          <ThemeIcon theme={theme} viewBox={moon.viewBox} onClick={handleLightToggle}>
            <path d={moon.path}></path>
          </ThemeIcon>
        )}
      </Hold>
    </Nav>
  );
};

const Nav = styled.nav<{ theme: ThemeState }>`
  height: 64px;
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  padding: 0 0.5em;
  position: fixed;
  width: 100%;

  ${({ theme }) => {
    return `background: ${theme.primaryColor}; box-shadow: 0 5px 4px -4px ${theme.shadow}; border-bottom: 4px solid ${theme.border}`;
  }};
  margin: 0;
  z-index: 4;
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
  theme: ThemeState;
}>`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => {
    return theme.accentColor;
  }};
  cursor: pointer;

  @media ${device.laptopL} {
    display: none;
  }
`;
const ThemeIcon = styled.svg.attrs({ preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => {
    return theme.accentColor;
  }};
  cursor: pointer;
`;

const IconSect = styled.svg.attrs({ preserveAspectRatio })<{
  theme: ThemeState;
}>`
  fill: ${({ theme }) => {
    return theme.primaryInverse;
  }};
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
    color: ${({ theme }) => theme.primaryInverse};
  }
`;
export { TopNav };
