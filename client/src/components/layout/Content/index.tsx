import React from "react";

import { StyledContent, SectionHold } from "./style";

export const Content: React.FC = ({ children }) => {
  return (
    <StyledContent>
      <SectionHold>
        <section>{children}</section>
      </SectionHold>
    </StyledContent>
  );
};
