import styled from "styled-components";

import { ThemeState } from "../../../shared/types/types";
import { device } from "../../../shared/constants/device";
import { menu, preserveAspectRatio } from "../../../shared/constants/svg";
import { getThemeVariables } from "../../../lib/utils-theme";

const visual = getThemeVariables();

export const Nav = styled.nav<{ theme: ThemeState }>`
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
  background: ${() => {
    return visual.theme.primaryText;
  }};
`;

export const Hold = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-items: baseline;
  justify-content: space-between;

  @media ${device.tablet} {
    max-width: 950px;
  }

  @media ${device.laptopM} {
    max-width: 1211.45px;
  }

  @media ${device.laptopL} {
    max-width: 1450px;
  }
`;

export const Icon = styled.svg.attrs({ viewBox: menu.viewBox, preserveAspectRatio })<{
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

export const ThemeIcon = styled.svg.attrs({ preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => {
    return theme.accentColor;
  }};
  cursor: pointer;
`;

export const IconSect = styled.svg.attrs({ preserveAspectRatio })<{
  theme: ThemeState;
}>`
  fill: ${({ theme }) => {
    return theme.primaryInverse;
  }};
  width: 20px;
  height: 20px;
`;

export const BaseSection = styled.div`
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
