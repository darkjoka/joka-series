import React from "react";

import { SupEntry, Entry, Hero, Genre, Description, Accordion } from "./style";

export const MovieDetailSkeleton: React.FC = () => {
  return (
    <SupEntry>
      <Entry>
        <Hero></Hero>
        <Genre>
          {[...Array(4)].map((_, idx) => {
            return <div key={idx}></div>;
          })}
        </Genre>
        <Description>
          {[...Array(8)].map((_, idx) => {
            return <div key={idx}></div>;
          })}
        </Description>

        <Accordion>
          {[...Array(4)].map((_, idx) => {
            return <div key={idx}></div>;
          })}
        </Accordion>
      </Entry>
    </SupEntry>
  );
};
