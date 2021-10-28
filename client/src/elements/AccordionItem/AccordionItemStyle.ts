import styled from "styled-components";
import { DISCORD_DARK, RED, GENERIC_BORDER, GREEN } from "../../shared/constants/colors";
import { device } from "../../shared/constants/device";
import { cheveron, preserveAspectRatio } from "../../shared/constants/svg";
import { theme } from "../../themes/base";

export const AccordionContainer = styled.div`
  margin: 8px 0;
  border: 2px solid ${({ theme: { theme } }) => theme.secondaryBackground};
  border-radius: 4px;
`;

export const AccordionHead = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 52px;
  background-color: ${({ theme: { theme } }) => theme.tertiaryBackground};
  transition: all 0.5s ease;
  position: relative;
  ${({ isOpen }) => {
    return isOpen ? "  border-radius: 4px 4px 0 0;" : "  border-radius: 4px";
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  cursor: pointer;
  ${({ isOpen, theme: { theme } }) => {
    return isOpen ? `box-shadow: 0 10px 24px ${-4.2 / theme.shadowStrength}px ${theme.shadow}` : "";
  }};
  transition: box-shadow, border-radius -0.5s ease;
  color: ${({ theme: { theme } }) => theme.primaryText};
`;

export const AccordionBody = styled.div<{ isOpen: boolean; members: number }>`
  width: 100%;
  background-color: ${({ theme: { theme } }) => theme.primaryBackground};
  overflow: hidden;
  padding: 0 10px;
  color: ${({ theme: { theme } }) => theme.secondaryText};

  ${({ isOpen, members }) => {
    return isOpen ? `max-height: ${72 * members}px` : "max-height: 0";
  }};
  transition: all 0.5s ease;
`;

export const Icon = styled.svg.attrs({
  viewBox: cheveron.viewBox,
  preserveAspectRatio,
})<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  fill: ${({ theme: { theme } }) => theme.primaryText};
  background: ${({ theme: { theme } }) => theme.brand};

  ${({ isOpen }) => {
    return isOpen
      ? ""
      : `transform: rotate(180deg);
      `;
  }}

  transition: all 0.5s ease;
`;

export const Epi = styled.div`
  height: 64px;
  margin: 8px 0;

  border-bottom: 1px solid ${({ theme: { theme } }) => theme.secondaryBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-last-child(1) {
    border: none;
  }
`;

export const Download = styled.div`
  display: flex;
  align-items: center;
`;

export const Size = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  } ;
`;

export const Button = styled.div`
  margin-left: 16px;
  background: ${({ theme: { theme } }) => theme.brand};
  padding: 8px;
  border-radius: 4px;

  a {
    color: ${({ theme: { theme } }) => theme.primaryText};
    text-decoration: none;
  }
`;
