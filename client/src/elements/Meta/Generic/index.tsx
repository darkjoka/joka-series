import React from "react";

import { MetaProps } from "..";

export const GenericMeta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};
