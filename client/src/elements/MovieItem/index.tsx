import React, { useState } from "react";

import { pushLink, pushThumbUrl } from "../../store/actions/current";
import { openBottom } from "../../store/actions/navigation";
import { augmentFavorite } from "../../store/actions/local";
import { Movies, MovieProps } from "../../shared/types/types";
import { bookMark, bookMarkFilled, camera } from "../../shared/constants/svg";
import { Card, ImageHold, CamIcon, CardContent, Title, AltButtons, Download, Icon, Favorite } from "./MovieItemStyle";
import { localAdd, localFetch, localSet } from "../../lib/utils-local";

export const MovieItem: React.FC<MovieProps> = ({ imageSource, title, teaser, permaLink }) => {
  const [localFavoriteStore, setLocalFavoriteStore] = useState<Movies>(localFetch("favorite"));

  const handleDownload = () => {
    pushLink(permaLink);
    pushThumbUrl(imageSource);
    openBottom();
  };

  return (
    <Card>
      <ImageHold onClick={handleDownload}>
        <object data={`http://www.todaytvseries2.com/${imageSource}`} aria-label={title}>
          <CamIcon>
            <path d={camera.path}></path>
          </CamIcon>
        </object>
      </ImageHold>

      <CardContent teaser={teaser}>
        <Title onClick={handleDownload}>{title}</Title>
        {teaser ? <p>{teaser.slice(0, 70)}...</p> : ""}
        <AltButtons>
          <Favorite onClick={() => console.log("favorited")}>
            {localFavoriteStore.some((movie) => {
              return movie.title === title;
            })
              ? "Unfavorite"
              : "Favorite"}
          </Favorite>
          <Download onClick={handleDownload}>Download</Download>
        </AltButtons>
      </CardContent>

      <Icon onClick={() => console.log("favorited")}>
        <path
          d={
            localFavoriteStore.some((movie) => {
              return movie.title === title;
            })
              ? bookMarkFilled.path
              : bookMark.path
          }
        ></path>
      </Icon>
    </Card>
  );
};
