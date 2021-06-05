import React from "react";
import { Hero } from "./Hero";
import styled from "styled-components";

const Content: React.FC = () => {
  return (
    <StyledContent>
      <Hero></Hero>
      <section></section>
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
