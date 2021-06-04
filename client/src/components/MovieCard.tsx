import React, { FC } from "react";
import styled from "styled-components";
import { GENERIC_BORDER, WHITE } from "../constants/colors";
import { device } from "../constants/device"

interface MovieCardProps {
  imageSrc: string,
  title: string,
  teaser?: string,
}

const MovieCard:FC<MovieCardProps> = ({ imageSrc, title, teaser }) => {
    return (
      <Card>
        <ImageHold>
            <img src={ imageSrc } alt={ title } />
        </ImageHold>
        <CardContent>
          <Title>{ title }
          </Title>
          {teaser ? <p>{teaser}</p> : <AltButtons></AltButtons>}
          
        </CardContent>
        <BookMarkIcon></BookMarkIcon>
      </Card>
    )
}

const Card = styled.div`
  width: 100%;
  border: 1px solid ${GENERIC_BORDER};
  padding: 4px;
  border-radius: 4px 4px 0 0;
  margin: 8px;
  position: relative;
  background-color: ${WHITE};
  font-size: 0.9em;
  display: flex;
  
  @media ${device.mobileM}{
    font-size: 1em;
  }
`

const ImageHold = styled.div`
  display: grid;
  place-items: center;

  img {
    aspect-ratio: 250/350;
    height: 150px;
    border-radius: 4px;
  }
`

const CardContent = styled.div`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;

  p{
    margin: 4px;
  }
`

const Title = styled.p`
  font-weight: bold;
  width: calc(100% - 12px);
`

// PlaceHolder for actual Bookmark svg
const BookMarkIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: bisque;
  position: absolute;
  right: 5px;
`

const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

`
export {MovieCard}