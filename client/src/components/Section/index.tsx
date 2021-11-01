import React from "react";

import { Sect } from "./style";
import { SectionInterface } from "../../shared/types/types";

export const Section: React.FC<SectionInterface> = ({ children, label }) => {
  return (
    <Sect>
      {children} {label}
    </Sect>
  );
};
