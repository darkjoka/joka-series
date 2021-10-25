import styled from "styled-components";

import { device } from "../../../shared/constants/device";
import { menu, preserveAspectRatio } from "../../../shared/constants/svg";

export const Nav = styled.nav(
  ({ theme: { theme } }) => `
  height: 64px;
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  padding: 0 0.5em;
  position: fixed;
  width: 100%;
  background-color: ${theme.primaryBackground};
  margin: 0;
  z-index: 4;
  box-shadow: 0 10px  ${24}px ${-4.2 / theme.shadowStrength}px ${theme.shadow};
`
);

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

export const Icon = styled.svg.attrs({ viewBox: menu.viewBox, preserveAspectRatio })(
  ({ theme: { theme } }) => `
  width: 48px;
  height: 48px;
  fill: ${theme.brand};
  cursor: pointer;

  @media ${device.laptopL} {
    display: none;
  }
`
);

export const ThemeIcon = styled.svg.attrs({ preserveAspectRatio })(
  ({ theme: { theme } }) => `
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: ${theme.brand};
`
);

export const IconSect = styled.svg.attrs({ preserveAspectRatio })`
  width: 20px;
  height: 20px;
`;

export const BaseSection = styled.div(
  ({ theme: { theme } }) => `
  justify-content: space-evenly;
  display: none;

  @media ${device.laptopL} {
    display: flex;
  }
  a {
    text-decoration: none;
    color: ${theme.brand};
  }
`
);
