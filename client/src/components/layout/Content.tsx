import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <StyledContent>
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
