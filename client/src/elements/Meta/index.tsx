import React from "react";

import { Helmet } from "react-helmet";

interface MetaProps {
  description: string;
  image: string;
  title: string;
}

export const Meta: React.FC<MetaProps> = ({ description, title, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Jseries, J series,Free Tv Series,Series Download, Free Download, Free Series Download, Drama, Action, History, Thriller, Comedy"
      />

      {/* Google/ Search engine tags  */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* Facebook */}
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
