import React from "react";

import { bookMarkFilled } from "../../../shared/constants/svg";
import { MovieCardProps } from "../../../shared/types/types";
import { Card, ImageHold, CardContent, Title, Teaser, AltButtons, Icon } from "./MovieItemSkeletonStyle";

export const MovieItemSkeleton: React.FC<MovieCardProps> = ({ teaser, theme }) => {
  return (
    <Card theme={theme}>
      <ImageHold theme={theme} />
      <CardContent teaser={teaser} theme={theme}>
        <Title theme={theme} />
        {teaser ? (
          [0, 1, 2, 3, 4, 5].map((num) => {
            return <Teaser theme={theme} key={num} />;
          })
        ) : (
          <AltButtons theme={theme}>
            <div></div>
            <div></div>
          </AltButtons>
        )}
      </CardContent>
      <Icon theme={theme}>
        <path d={bookMarkFilled.path} />
      </Icon>
    </Card>
  );
};
