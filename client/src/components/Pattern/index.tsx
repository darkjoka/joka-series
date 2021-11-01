import React from "react";

import { Wrapper, Row } from "./style";

export const Pattern = () => {
  return (
    <Wrapper>
      {[...Array(10)].map((_, idx) => {
        return (
          <Row key={idx}>
            {[...Array(12)].map((_, idx2) => (
              <div key={idx2} />
            ))}
          </Row>
        );
      })}
    </Wrapper>
  );
};
