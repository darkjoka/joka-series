import React from "react";

import { MetaProps } from "..";

export const GoogleMeta: React.FC<MetaProps> = ({ description, title, image }) => {
  return (
    <>
      {/* Google/ Search engine tags  */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
    </>
  );
};
