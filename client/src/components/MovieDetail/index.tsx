import React from "react";

import { Accordion } from "../Accordion";
import { DetailState } from "../../shared/types/types";
import { SupEntry, Entry, Hero, Title, Genre, Description, CamIcon } from "./style";
import { camera } from "../../shared/constants/svg";

export const MovieDetail: React.FC<DetailState> = ({ heroImage, genres, description, seasonEpisodes, title }) => {
  return (
    <SupEntry>
      <Entry>
        <Hero>
          <object data={`http://www.todaytvseries2.com${heroImage}`} aria-label="hero">
            <CamIcon>
              <path d={camera.path}></path>
            </CamIcon>
          </object>
        </Hero>
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
