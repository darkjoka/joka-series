import React from "react";

import { SupEntry, Entry, Hero, Genre, Description, Accordion } from "./MovieDetailSkeletonStyle";

export const MovieDetailSkeleton: React.FC = () => {
  return (
    <SupEntry>
      <Entry>
        <Hero></Hero>
        <Genre>
          {[1, 2, 3, 4].map((num) => {
            return <div key={num}></div>;
          })}
        </Genre>
        <Description>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
            return <div key={num}></div>;
          })}
        </Description>

        <Accordion>
          {[1, 2, 3, 4].map((num) => {
            return <div key={num}></div>;
          })}
        </Accordion>
      </Entry>
    </SupEntry>
  );
};
