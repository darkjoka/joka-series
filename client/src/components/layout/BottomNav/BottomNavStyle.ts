import styled from "styled-components";

import { ThemeState } from "../../../shared/types/types";
import { device } from "../../../shared/constants/device";
import { close, preserveAspectRatio } from "../../../shared/constants/svg";

export const StyledNav = styled.div<{ isBottomNavOpen: boolean; theme: ThemeState }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => {
      return theme.isLight
        ? `rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, .2)`
        : `rgba(0, 0, 0, .3),
      rgba(0, 0, 0, .2)`;
    }}
  );
  backdrop-filter: blur(0.9rem);
  padding: 0 8px;
  transition: transform 0.3s ease;
  transform: translateY(${({ isBottomNavOpen }) => (isBottomNavOpen ? "0vh" : "100vh")});
  color: ${({ theme }) => theme.primaryInverse};

  @media ${device.tablet} {
    padding: 4px 100px;
  }
`;

export const Inner = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  height: 92%;
  border-radius: 26px 26px 0 0;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  border: 4px solid ${({ theme }) => theme.accentColor};
`;

export const InnerNav = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.accentColor};
  cursor: pointer;
`;
