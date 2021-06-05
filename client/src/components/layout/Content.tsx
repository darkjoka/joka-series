import React from "react";
import { Hero } from "./Hero";
import styled from "styled-components";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <StyledContent>
      <Hero></Hero>
      <section>{children}</section>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 100vw;
  padding-top: 64px;

  section {
    padding: 8px;
    min-height: 50vh;
  }
`;

export { Content };
