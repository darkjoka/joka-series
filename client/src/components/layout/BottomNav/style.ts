import styled from "styled-components";

import { opacify } from "../../../lib/utils-theme";
import { device } from "../../../shared/constants/device";
import { close, preserveAspectRatio } from "../../../shared/constants/svg";

export const StyledNav = styled.div<{ isBottomNavOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  background: linear-gradient(
    to bottom,
    ${({ theme: { theme } }) => opacify(theme.secondaryBackground, 30)},
    ${({ theme: { theme } }) => opacify(theme.primaryBackground, 20)}
  );
  backdrop-filter: blur(0.9rem);
  padding: 0 8px;
  transition: transform 0.3s ease;
  transform: translateY(${({ isBottomNavOpen }) => (isBottomNavOpen ? "0vh" : "100vh")});

  @media ${device.tablet} {
    padding: 4px 100px;
  }
`;

export const Inner = styled.div(
  ({ theme: { theme } }) => `
  background: ${theme.primaryBackground};
  height: 92%;
  border-radius: 26px 26px 0 0;
  overflow-y: auto;
  overscroll-behavior-y: contain;
`
);
export const InnerNav = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })(
  ({ theme: { theme } }) => `
  width: 48px;
  height: 48px;
  fill: ${theme.brand};
  cursor: pointer;
`
);
