import styled from "styled-components";

import { ThemeState } from "../../../shared/types/types";
import { device } from "../../../shared/constants/device";
import { bookMarkFilled, preserveAspectRatio } from "../../../shared/constants/svg";

export const Card = styled.div<{ theme: ThemeState }>`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.tertiaryColor};
  padding: 2px;
  border-radius: 4px 4px 0 0;
  margin: 8px 0px;
  position: relative;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 0.9em;
  display: flex;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.tertiaryColor};
    opacity: 0.5;
    z-index: 2;
    animation: load 1.5s infinite;
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: 222.29px;
    margin: 8px;
  }

  @keyframes load {
    0% {
      transform: skewX(-20deg) translate(-150%);
    }
    100% {
      transform: skewX(-20deg) translate(250%);
    }
  }
`;

export const ImageHold = styled.div<{ theme: ThemeState }>`
  aspect-ratio: 250/350;
  height: 150px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.tertiaryColor};

  @media ${device.tablet} {
    height: 200px;
    border-radius: 0;
    aspect-ratio: 250/350;
    width: 214.29px;
  }
`;

export const CardContent = styled.div<{ teaser: boolean; theme: ThemeState }>`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${({ teaser }) => (!teaser ? "space-between" : "")};

  p {
    margin: 4px;
  }

  @media ${device.tablet} {
    margin-left: -1px;
    width: calc(100% + 3px);
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Title = styled.p<{ theme: ThemeState }>`
  width: 70%;
  height: 24px;
  background-color: ${({ theme }) => theme.tertiaryColor};
  border-radius: 2px;
`;

export const Icon = styled.svg.attrs({
  viewBox: bookMarkFilled.viewBox,
  preserveAspectRatio,
})`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 5px;
  fill: ${({ theme }) => theme.tertiaryColor};

  @media ${device.tablet} {
    fill: ${({ theme }) => theme.primaryColor};
    top: 5px;
  }
`;

export const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  div {
    width: 80px;
    height: 28px;
    background-color: ${({ theme }) => theme.accentColor};
    margin: 4px;
  }
`;

export const Teaser = styled.div<{ theme: ThemeState }>`
  height: 12px;
  background-color: ${({ theme }) => theme.tertiaryColor};
  margin: 4px;
  border-radius: 2px;
`;