import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { pushLink } from "../actions/current";
import { openBottom } from "../actions/navigation";
import { GENERIC_BORDER } from "../constants/colors";
import { device } from "../constants/device";
import {
  preserveAspectRatio,
  bookMarkFilled,
  bookMark,
  camera,
} from "../constants/svg";
import { Movie } from "../reducers/indexP";
import { ThemeState } from "../reducers/theme";

export const handleLocalFetch = (store: string): Movie[] => {
  const item = localStorage.getItem(store);
  if (item) {
    return JSON.parse(item);
  }
  return [];
};
interface MovieProps extends Movie {
  theme: ThemeState;
}
const MovieCard: React.FC<MovieProps> = ({
  imageSource,
  title,
  teaser,
  permaLink,
  theme,
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
    <Card theme={theme}>
      <ImageHold theme={theme} onClick={handleDownload}>
        <object
          data={`http://www.todaytvseries2.com/${imageSource}`}
          aria-label={title}
        >
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

const Card = styled.div<{ theme: ThemeState }>`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.tertiaryColor};
  padding: 4px;
  border-radius: 4px 4px 0 0;
  margin: 8px 0px;
  position: relative;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 0.9em;
  display: flex;
  color: ${({ theme }) => theme.primaryInverse};

  @media ${device.mobileM} {
    font-size: 1em;
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: 222.29px;
    margin: 8px;
    padding: 2px;
  }
`;

const ImageHold = styled.div<{ theme: ThemeState }>`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.tertiaryColor};
  border-radius: 4px;
  aspect-ratio: 250/350;
  height: 150px;

  &:hover {
    cursor: pointer;
  }

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

const CardContent = styled.div<{
  teaser: string | undefined;
  theme: ThemeState;
}>`
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
    background-color: ${({ theme }) => theme.primaryColor};
    height: 100%;
  }
`;

const Title = styled.p`
  font-weight: bold;
  width: calc(100% - 12px);
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.svg.attrs({
  viewBox: bookMark.viewBox,
  preserveAspectRatio,
})<{ theme: ThemeState }>`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 5px;
  fill: ${({ theme }) => theme.tertiaryColor};
  &:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.accentColor};
  }

  @media ${device.tablet} {
    fill: ${({ theme }) => theme.primaryColor};
    top: 5px;
  }
`;

const CamIcon = styled.svg.attrs({
  viewBox: camera.viewBox,
  preserveAspectRatio,
})<{ theme: ThemeState }>`
  width: 32px;
  height: 32px;
  fill: ${({ theme }) => theme.primaryColor};

  @media ${device.tablet} {
    transform: translate3d(-10px, -30px, 0);
  }
`;

const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  font-size: 0.9em;

  @media ${device.mobileM} {
    font-size: 1em;
  }
`;

const Favorite = styled.div<{ theme: ThemeState }>`
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.accentColor};
  width: 86px;
  border-radius: 4px;
  color: ${({ theme }) => theme.accentColor};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.primaryColor};
  }

  @media ${device.mobileM} {
    width: 102px;
  }
`;

const Download = styled.div<{ theme: ThemeState }>`
  height: 32px;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.primaryColor};
  width: 78px;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.accentColor};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.accentColor};
  }

  @media ${device.mobileM} {
    width: 102px;
  }
`;

export { MovieCard };
