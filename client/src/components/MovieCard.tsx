import React from "react";
import styled from "styled-components";
import { GENERIC_BORDER, WHITE } from "../constants/colors";
import { device } from "../constants/device";
import {
  viewBox,
  preserveAspectRatio,
  bookMarkFilled,
  bookMark,
} from "../constants/svg";

interface MovieCardProps {
  imageSrc: string;
  title: string;
  teaser?: string;
  isBookMarked: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  imageSrc,
  title,
  teaser,
  isBookMarked,
}) => {
  return (
    <Card>
      <ImageHold>
        <img src={imageSrc} alt={title} />
      </ImageHold>
      <CardContent teaser={teaser}>
        <Title>{title}</Title>
        {teaser ? <p>{teaser}</p> : <AltButtons></AltButtons>}
      </CardContent>
      <Icon>
        <path d={isBookMarked ? bookMarkFilled : bookMark}> </path>
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

  img {
    aspect-ratio: 250/350;
    height: 150px;
    border-radius: 4px;
  }
`;

const CardContent = styled.div<{ teaser: string | undefined }>`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify: ${({ teaser }) => (teaser ? "space-between" : "")};

  p {
    margin: 4px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  width: calc(100% - 12px);
`;

const Icon = styled.svg.attrs({ viewBox, preserveAspectRatio })`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 5px;
  fill: gainsboro;
`;

const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`;
export { MovieCard };
