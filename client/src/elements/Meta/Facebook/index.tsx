import React from "react";

import { MetaProps } from "..";

export const FacebookMeta: React.FC<MetaProps> = ({ title, description, image }) => {
  return (
    <>
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </>
  );
};
