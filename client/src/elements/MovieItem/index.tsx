import React from "react";

import { pushLink, pushThumbUrl } from "../../store/actions/current";
import { openBottom } from "../../store/actions/navigation";
import { MovieProps } from "../../shared/types/types";
import { bookMark, bookMarkFilled, camera } from "../../shared/constants/svg";
import { Card, ImageHold, CamIcon, CardContent, Title, AltButtons, Download, Icon, Favorite } from "./MovieItemStyle";
import { localToggle } from "../../lib/utils-local";

export const MovieItem: React.FC<MovieProps> = ({ imageSource, title, teaser, permaLink, local, setLocal }) => {
  const handleBookmark = (): void => {
    setLocal(localToggle("favorite", { imageSource, title, teaser, permaLink }, local));
  };

  const essentials = permaLink.split("/");
  permaLink = essentials[essentials.length - 1];

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
          <Favorite onClick={handleBookmark}>
            {local.some((movie) => {
              return movie.title === title;
            })
              ? "Unfavorite"
              : "Favorite"}
          </Favorite>
          <Download onClick={handleDownload}>Download</Download>
        </AltButtons>
      </CardContent>

      <Icon onClick={handleBookmark}>
        <path
          d={
            local.some((movie) => {
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
