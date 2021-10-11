import styled from "styled-components";

import { ThemeState } from "../../shared/types/types";

export const HeadList = styled.div<{ theme: ThemeState }>`
  display: flex;
  justify-content: space-between;
  width: 70%;
  position: relative;
  color: ${({ theme }) => theme.primaryInverse};

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, ${({ theme }) => theme.accentColor} 50%, transparent 50%);
    bottom: -16px;
  }
`;

export const Content = styled.div`
  block-size: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow: auto hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export const FilterObj = styled.div<{ key: number; theme: ThemeState }>`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.tertiaryColor};
  width: 95%;
  border-radius: 4px;
  height: 30px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryInverse};
    width: inherit;
    height: inherit;
    display: grid;
    place-items: center;
  }
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  place-items: center;
  grid-gap: 8px;
  font-size: 0.9em;
  width: 100%;
  margin-top: 32px;
  scroll-snap-align: start;
`;
