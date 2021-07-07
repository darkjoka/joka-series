import React from "react";
import styled from "styled-components";
import { ThemeState } from "../reducers/theme";

interface SectionInterface {
  children: React.ReactNode;
  label: string;
  theme?: ThemeState;
}

export const Section: React.FC<SectionInterface> = ({
  children,
  label,
  theme,
}) => {
  return (
    <Sect theme={theme}>
      {children} {label}
    </Sect>
  );
};

const Sect = styled.div<{ theme: ThemeState }>`
  display: flex;
  align-items: flex-end;
  padding: 8px;
  border-radius: 4px;

  svg {
    margin-right: 12px;
  }

  &:hover {
    color: ${({ theme }) => theme.accentColor};

    svg {
      fill: ${({ theme }) => theme.accentColor};
    }
  }
`;
