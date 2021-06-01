import React, { FC } from "react";
import styled from "styled-components";


const MovieCard:FC = () => {
    return (
        <Card>
            <img src="" alt="" />
            
        </Card>
    )
}

const Card = styled.div`
  width: 100%;
  border: 1px solid gainsboro;
  padding: 4px;
  border-radius: 4px 4px 0 0;
  margin: 8px;
  position: relative;
  background-color: white;

  img {
    aspect-ratio: 250/350;
    height: 150px;
    border-radius: 4px;
  }
`

export {MovieCard}