import React, { useState } from "react";

import { pushLink } from "../../store/actions/current";
import { openBottom } from "../../store/actions/navigation";
import { augmentFavorite } from "../../store/actions/local";
import { Movies, MovieProps } from "../../shared/types/types";
import { localAdd, localFetch, localSet } from "../../shared/localStorage";
import { bookMark, bookMarkFilled, camera } from "../../shared/constants/svg";
import { Card, ImageHold, CamIcon, CardContent, Title, AltButtons, Download, Icon, Favorite } from "./MovieItemStyle";

export const MovieItem: React.FC<MovieProps> = ({ imageSource, title, teaser, permaLink, theme }) => {
  const [localFavoriteStore, setLocalFavoriteStore] = useState<Movies>(localFetch("favorite"));

  const updateLocal = (items: Movies, store: string): void => {
    localSet(store, items);
    setLocalFavoriteStore(items);
  };

  const syncLocal = (movies: Movies): void => {
    // syncs app state with localStorage
    augmentFavorite(movies);
  };

  const handleBookmark = (): void => {
    let favorites = localAdd("favorite", {
      title,
      teaser,
      permaLink,
      imageSource,
    });
    updateLocal(favorites, "favorite");
    syncLocal(favorites);
  };

  const handleDownload = () => {
    pushLink(permaLink);
    openBottom();
  };

  return (
    <Card theme={theme}>
      <ImageHold theme={theme} onClick={handleDownload}>
        <object data={`http://www.todaytvseries2.com/${imageSource}`} aria-label={title}>
          <CamIcon theme={theme}>
            <path d={camera.path}></path>
          </CamIcon>
        </object>
      </ImageHold>

      <CardContent theme={theme} teaser={teaser}>
        <Title onClick={handleDownload}>{title}</Title>
        {teaser ? <p>{teaser.slice(0, 70)}...</p> : ""}
        <AltButtons>
          <Favorite theme={theme} onClick={handleBookmark}>
            {localFavoriteStore.some((movie) => {
              return movie.title === title;
            })
              ? "Unfavorite"
              : "Favorite"}
          </Favorite>
          <Download theme={theme} onClick={handleDownload}>
            Download
          </Download>
        </AltButtons>
      </CardContent>

      <Icon theme={theme} onClick={handleBookmark}>
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
