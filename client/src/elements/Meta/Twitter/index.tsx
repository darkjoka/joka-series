import React from "react";

import { MetaProps } from "..";

export const TwitterMeta: React.FC<MetaProps> = ({ title, description, image }) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
