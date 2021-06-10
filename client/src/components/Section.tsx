import React from "react";
import styled from "styled-components";

interface SectionInterface {
  children: React.ReactNode;
  label: string;
}

export const Section: React.FC<SectionInterface> = ({ children, label }) => {
  return (
    <Sect>
      {children} {label}
    </Sect>
  );
};

const Sect = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: gray;
  }

  svg {
    margin-right: 12px;
  }
`;
