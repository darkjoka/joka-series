import React from "react";

import { MetaProps } from "..";

export const GenericMeta: React.FC<MetaProps> = ({ title }) => {
  return (
    <>
      <title>{title}</title>
    </>
  );
};
