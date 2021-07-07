import React from "react";
import styled from "styled-components";
import { DetailState } from "../reducers/current";
import { AccordionList } from "./AccordionList";

export const Detail: React.FC<DetailState> = ({
  heroImage,
  genres,
  description,
  seasonEpisodes,
  title,
}) => {
  return (
    <SupEntry>
      <Entry>
        <Hero image={`http://www.todaytvseries2.com${heroImage}`}></Hero>
        <Title>{title}</Title>
        <Genre>
          {genres.map((value) => {
            return <span key={value}>{value}</span>;
          })}
        </Genre>
        <Description>{description}</Description>
        <AccordionList seasonEpisode={seasonEpisodes}></AccordionList>
      </Entry>
    </SupEntry>
  );
};

const SupEntry = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Entry = styled.div`
  padding: 8px 8px 0;
  width: inherit;
  max-width: 800px;
`;
const Title = styled.p`
  text-align: center;
`;
const Genre = styled.div`
  width: 100%;
  display: flex;
  margin: 16px 0;
  align-items: center;
  border-radius: 4px;
  flex-wrap: wrap;

  span {
    margin: 2px 4px;
  }
`;

const Hero = styled.div<{ image: string }>`
  aspect-ratio: 1067/600;
  width: 100%;
  background-size: cover;
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
  background: url(${({ image }) => image});
`;

const Description = styled.div`
  margin: 16px 0px;
`;
