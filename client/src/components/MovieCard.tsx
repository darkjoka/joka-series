import React, { useState } from "react";
import styled from "styled-components";
import { GENERIC_BORDER, WHITE } from "../constants/colors";
import { device } from "../constants/device";
import {
  preserveAspectRatio,
  bookMarkFilled,
  bookMark,
  camera,
} from "../constants/svg";

interface MovieCardProps {
  permaLink: string;
  imageSrc: string;
  title: string;
  teaser?: string;
  isBookMarked?: boolean;
}

export const handleLocalFetch = () => {
  const item = localStorage.getItem("favorite");
  if (item) {
    return JSON.parse(item);
  }
};

const MovieCard: React.FC<MovieCardProps> = ({
  imageSrc,
  title,
  teaser,
  permaLink,
}) => {
  const [localStore, setLocalStore] =
    useState<MovieCardProps[]>(handleLocalFetch);

  const updateLocal = (items: MovieCardProps[]): void => {
    localStorage.setItem("favorite", JSON.stringify(items));
    setLocalStore(items);
  };

  const handleBookmark = (): void => {
    const store = localStorage.getItem("favorite");
    if (store) {
      let favorites: MovieCardProps[] = JSON.parse(store);
      if (
        favorites.some((movie) => {
          return movie.title === title;
        })
      ) {
        favorites = favorites.filter((series) => {
          return series.title !== title;
        });
      } else {
        favorites = favorites.concat([{ title, imageSrc, teaser, permaLink }]);
      }

      updateLocal(favorites);
    }
  };

  return (
    <Card>
      <ImageHold>
        <object data={imageSrc} aria-label={title}>
          <CamIcon>
            <path d={camera.path}></path>
          </CamIcon>
        </object>
      </ImageHold>

      <CardContent teaser={teaser}>
        <Title>{title}</Title>
        {teaser ? <p>{teaser.slice(0, 70)}...</p> : <AltButtons></AltButtons>}
        <AltButtons>
          <Favorite onClick={handleBookmark}>
            {localStore.some((movie) => {
              return movie.title === title;
            })
              ? "unfavorite"
              : "favorite"}
          </Favorite>
          <Download>download</Download>
        </AltButtons>
      </CardContent>

      <Icon onClick={handleBookmark}>
        <path
          d={
            localStore.some((movie) => {
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

const Card = styled.div`
  width: 100%;
  border: 1px solid ${GENERIC_BORDER};
  padding: 4px;
  border-radius: 4px 4px 0 0;
  margin: 8px 0px;
  position: relative;
  background-color: ${WHITE};
  font-size: 0.9em;
  display: flex;

  @media ${device.mobileM} {
    font-size: 1em;
  }
`;

const ImageHold = styled.div`
  display: grid;
  place-items: center;
  background: gainsboro;
  border-radius: 4px;
  aspect-ratio: 250/350;
  height: 150px;

  object {
    border-radius: inherit;
    aspect-ratio: inherit;
    height: inherit;
    display: grid;
    place-items: center;
  }
`;

const CardContent = styled.div<{ teaser: string | undefined }>`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${({ teaser }) =>
    !teaser ? "space-between" : "space-between"};

  p {
    margin: 4px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  width: calc(100% - 12px);
`;

const Icon = styled.svg.attrs({
  viewBox: bookMark.viewBox,
  preserveAspectRatio,
})`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 5px;
  fill: gainsboro;
`;

const CamIcon = styled.svg.attrs({
  viewBox: camera.viewBox,
  preserveAspectRatio,
})`
  width: 24px;
  height: 24px;
  fill: gray;
`;

const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Favorite = styled.div`
  height: 32px;
  display: grid;
  place-items: center;
  background-color: gainsboro;
  color: gray;
  width: 86px;
  border-radius: 4px;

  @media ${device.mobileM} {
    width: 92px;
  }
`;

const Download = styled.div`
  height: 32px;
  display: grid;
  place-items: center;
  background-color: gray;
  color: gainsboro;
  width: 78px;
  border-radius: 4px;
  margin-left: 4px;

  @media ${device.mobileM} {
    width: 86px;
  }
`;

export { MovieCard };
