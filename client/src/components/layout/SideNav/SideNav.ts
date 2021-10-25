import styled from "styled-components";

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

export const StyledNav = styled.div(
  ({ theme: { theme } }) => `
  width: 70vw;
  overflow-y: scroll;
  height: 100vh;
  padding: 12px;
  background-color: ${theme.primaryBackground};

  @media ${device.tablet} {
    width: 30vw;
  }
`
);

export const StyledOther = styled.div`
  width: 30vw;

  @media ${device.tablet} {
    width: 70vw;
  }
`;

export const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })(
  ({ theme: { theme } }) => `
  width: 48px;
  height: 48px;
  fill: ${theme.brand};
  cursor: pointer;
`
);

export const IconSect = styled.svg.attrs({ preserveAspectRatio })(
  ({ theme: { theme } }) => `
  width: 20px;
  height: 20px;
  fill: ${theme.brand};
  cursor: pointer;
`
);

export const BaseSection = styled.div(
  ({ theme: { theme } }) => `
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: ${theme.brand};
  }
`
);
