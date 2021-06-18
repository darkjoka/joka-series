import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { pushLink } from "../actions/current";
import { openBottom } from "../actions/navigation";
import { GENERIC_BORDER, WHITE } from "../constants/colors";
import { device } from "../constants/device";
import {
  preserveAspectRatio,
  bookMarkFilled,
  bookMark,
  camera,
} from "../constants/svg";
import { Movie } from "../reducers/indexP";

export const handleLocalFetch = (store: string): Movie[] => {
  const item = localStorage.getItem(store);
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const MovieCard: React.FC<Movie> = ({
  imageSource,
  title,
  teaser,
  permaLink,
}) => {
  const [localFavoriteStore, setLocalFavoriteStore] = useState<Movie[]>(
    handleLocalFetch("favorite")
  );

  const updateLocal = (items: Movie[], store: string): void => {
    localStorage.setItem(store, JSON.stringify(items));
    setLocalFavoriteStore(items);
  };

  const handleBookmark = (): void => {
    let favorites = handleLocalFetch("favorite");
    if (
      favorites.some((movie) => {
        return movie.title === title;
      })
    ) {
      favorites = favorites.filter((series) => {
        return series.title !== title;
      });
    } else {
      favorites = favorites.concat([{ title, imageSource, teaser, permaLink }]);
    }

    updateLocal(favorites, "favorite");
  };
  const dispatch = useDispatch();

  const addToHistory = () => {
    let history = handleLocalFetch("history");
    if (
      !history.some((movie) => {
        return movie.title === title;
      })
    ) {
      history = history.concat([{ title, imageSource, teaser, permaLink }]);
    }

    updateLocal(history, "history");
  };

  const handleDownload = () => {
    dispatch(pushLink(permaLink));
    dispatch(openBottom());
    addToHistory();
  };

  return (
    <Card>
      <ImageHold onClick={handleDownload}>
        <object data={imageSource} aria-label={title}>
          <CamIcon>
            <path d={camera.path}></path>
          </CamIcon>
        </object>
      </ImageHold>

      <CardContent teaser={teaser}>
        <Title onClick={handleDownload}>{title}</Title>
        {teaser ? <p>{teaser.slice(0, 70)}...</p> : <AltButtons></AltButtons>}
        <AltButtons>
          <Favorite onClick={handleBookmark}>
            {localFavoriteStore.some((movie) => {
              return movie.title === title;
            })
              ? "unfavorite"
              : "favorite"}
          </Favorite>
          <Download onClick={handleDownload}>download</Download>
        </AltButtons>
      </CardContent>

      <Icon onClick={handleBookmark}>
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

  @media ${device.tablet} {
    flex-direction: column;
    width: 222.29px;
    margin: 8px;
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

  @media ${device.tablet} {
    height: 300px;
    border-radius: 0;
    aspect-ratio: 250/350;
    width: 214.29px;

    object {
      height: 300px;
      border-radius: inherit;
      aspect-ratio: 250/350;
    }
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

  @media ${device.tablet} {
    margin-top: -68px;
    margin-left: -1px;
    width: calc(100% + 3px);
    background-color: white;
    background: white;
  }
`;

const Title = styled.p`
  font-weight: bold;
  width: calc(100% - 12px);
  margin-bottom: 8px;
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

  @media ${device.tablet} {
    fill: white;
    top: 5px;
  }
`;

const CamIcon = styled.svg.attrs({
  viewBox: camera.viewBox,
  preserveAspectRatio,
})`
  width: 24px;
  height: 24px;
  fill: gray;

  @media ${device.tablet} {
    height: 42px;
    width: 42px;
    transform: translate3d(-10px, -30px, 0);
  }
`;

const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
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
  margin-left: 8px;

  @media ${device.mobileM} {
    width: 86px;
  }
`;

export { MovieCard };
