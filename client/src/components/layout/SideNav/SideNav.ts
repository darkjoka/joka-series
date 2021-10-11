import styled from "styled-components";

import { ThemeState } from "../../../shared/types/types";
import { device } from "../../../shared/constants/device";
import { close, preserveAspectRatio } from "../../../shared/constants/svg";

export const SuperNav = styled.nav<{ sideNavStatus: boolean }>`
  position: fixed;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  transform: translateX(${({ sideNavStatus }) => (sideNavStatus ? "0vw" : "-100vw")});
  display: flex;
`;

export const StyledNav = styled.div<{ theme: ThemeState }>`
  width: 70vw;
  overflow-y: scroll;
  height: 100vh;
  ${({ theme }) => {
    return `background: ${theme.primaryColor}; border-right: 4px solid ${theme.accentColor};`;
  }}
  padding: 12px;

  @media ${device.tablet} {
    width: 30vw;
  }
`;

export const StyledOther = styled.div`
  width: 30vw;

  @media ${device.tablet} {
    width: 70vw;
  }
`;

export const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => {
    return theme.accentColor;
  }};
  cursor: pointer;
`;

export const IconSect = styled.svg.attrs({ preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => {
    return theme.primaryInverse;
  }};
  cursor: pointer;
`;

export const BaseSection = styled.div<{ theme: ThemeState }>`
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryInverse};
  }
`;
