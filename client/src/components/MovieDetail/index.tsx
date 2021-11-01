import React from "react";

import { Accordion } from "../Accordion";
import { DetailState } from "../../shared/types/types";
import { SupEntry, Entry, Hero, Title, Genre, Description } from "./style";

export const MovieDetail: React.FC<DetailState> = ({ heroImage, genres, description, seasonEpisodes, title }) => {
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
        <Accordion seasonEpisode={seasonEpisodes}></Accordion>
      </Entry>
    </SupEntry>
  );
};
