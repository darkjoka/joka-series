import styled from "styled-components";
import { DISCORD_DARK, RED, GENERIC_BORDER, GREEN } from "../../shared/constants/colors";
import { device } from "../../shared/constants/device";
import { cheveron, preserveAspectRatio } from "../../shared/constants/svg";

export const AccordionContainer = styled.div`
  margin: 8px 0;
  border: 1px solid gainsboro;
  border-radius: 4px;
`;

export const AccordionHead = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 52px;
  background-color: white;
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

  &::before {
    content: "";
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    height: 26px;
    background: linear-gradient(to bottom, #bbbaba2b, transparent);
    max-height: ${({ isOpen }) => {
      return isOpen ? "26px" : "0;";
    }};
    transition: all 0.5s ease;
  }
`;

export const AccordionBody = styled.div<{ isOpen: boolean }>`
  width: 100%;
  // background-color: white;
  overflow: hidden;
  padding: 0 10px;

  ${({ isOpen }) => {
    return isOpen ? "max-height:2000px;" : "max-height:0px;";
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
  fill: white;

  ${({ isOpen }) => {
    return isOpen
      ? `background: ${RED};`
      : `transform: rotate(180deg);
      background: ${DISCORD_DARK}; `;
  }}
  transition: all 0.5s ease;
`;

export const Epi = styled.div`
  height: 64px;
  margin: 8px 0;
  // background: white;
  border-bottom: 1px solid ${GENERIC_BORDER};
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
  background: ${GREEN};
  padding: 8px;
  border-radius: 4px;

  a {
    color: white;
    text-decoration: none;
  }
`;
