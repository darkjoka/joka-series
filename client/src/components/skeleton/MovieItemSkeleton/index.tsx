import React from "react";

import { bookMarkFilled } from "../../../shared/constants/svg";
import { MovieCardProps } from "../../../shared/types/types";
import { Card, ImageHold, CardContent, Title, Teaser, AltButtons, Icon } from "./MovieItemSkeletonStyle";

export const MovieItemSkeleton: React.FC<MovieCardProps> = ({ teaser }) => {
  return (
    <Card>
      <ImageHold />
      <CardContent teaser={teaser}>
        <Title />
        {teaser ? (
          [...Array(5)].map((_, idx) => {
            return <Teaser key={idx} />;
          })
        ) : (
          <AltButtons>
            <div></div>
            <div></div>
          </AltButtons>
        )}
      </CardContent>
      <Icon>
        <path d={bookMarkFilled.path} />
      </Icon>
    </Card>
  );
};
