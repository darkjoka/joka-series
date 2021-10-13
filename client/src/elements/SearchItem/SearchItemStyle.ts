import styled from "styled-components";

import { ThemeState } from "../../shared/types/types";

export const Container = styled.div<{ theme: ThemeState }>`
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.tertiaryColor};
  color: ${({ theme }) => theme.primaryInverse};
  background-color: ${({ theme }) => theme.primaryColor};
  margin: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.tertiaryColor};
  }
`;
