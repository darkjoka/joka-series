import React from "react";
import styled from "styled-components";
import { GENERIC_BORDER, WHITE } from "../../constants/colors";
import { device } from "../../constants/device";
import { preserveAspectRatio, bookMarkFilled } from "../../constants/svg";

interface MovieCardProps {
  teaser: boolean;
}

const SMovieCard: React.FC<MovieCardProps> = ({ teaser }) => {
  return (
    <Card>
      <ImageHold></ImageHold>
      <CardContent teaser={teaser}>
        <Title></Title>
        {teaser ? (
          [0, 1, 2, 3, 4, 5].map((num) => {
            return <Teaser key={num}></Teaser>;
          })
        ) : (
          <AltButtons>
            <div></div>
            <div></div>
          </AltButtons>
        )}
      </CardContent>
      <Icon>
        <path d={bookMarkFilled.path}> </path>
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
  background-color: #f2f2f2f2;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;

    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 2;

    animation: load 1.5s infinite;
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: 222.29px;
    margin: 8px;
  }

  @keyframes load {
    0% {
      transform: skewX(-20deg) translate(-150%);
    }
    100% {
      transform: skewX(-20deg) translate(250%);
    }
  }
`;

const ImageHold = styled.div`
  aspect-ratio: 250/350;
  height: 150px;
  border-radius: 4px;
  background: #dddddd;

    @media ${device.tablet} {
    height: 200px;
    border-radius: 0;
    aspect-ratio: 250/350;
    width: 214.29px;
`;

const CardContent = styled.div<{ teaser: boolean }>`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${({ teaser }) => (!teaser ? "space-between" : "")};

  p {
    margin: 4px;
  }

  @media ${device.tablet} {
    margin-left: -1px;
    width: calc(100% + 3px);
  }
`;

const Title = styled.p`
  width: 70%;
  height: 24px;
  background-color: #dddddd;
  border-radius: 2px;
`;

const Icon = styled.svg.attrs({
  viewBox: bookMarkFilled.viewBox,
  preserveAspectRatio,
})`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 5px;
  fill: #dddddd;

  @media ${device.tablet} {
    fill: white;
    top: 5px;
  }
`;

const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  div {
    width: 80px;
    height: 28px;
    background-color: #dddddd;
    margin: 4px;
  }
`;

const Teaser = styled.div`
  height: 12px;
  background-color: #dddddd;
  margin: 4px;
  border-radius: 2px;
`;
export { SMovieCard };
