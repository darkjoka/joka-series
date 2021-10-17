import React from "react";

import { Helmet } from "react-helmet";
import { FacebookMeta } from "./Facebook";
import { GenericMeta } from "./Generic";
import { GoogleMeta } from "./Google";
import { TwitterMeta } from "./Twitter";

export interface MetaProps {
  description: string;
  image: string;
  title: string;
}

export const Meta: React.FC<MetaProps> = (props) => {
  return (
    <Helmet>
      <GenericMeta {...props} />
      <GoogleMeta {...props} />
      <FacebookMeta {...props} />
      <TwitterMeta {...props} />
    </Helmet>
  );
};
