import React from "react";

import { SupEntry, Entry, Hero, Genre, Description, Accordion } from "./MovieDetailSkeletonStyle";

export const MovieDetailSkeleton: React.FC = () => {
  return (
    <SupEntry>
      <Entry>
        <Hero></Hero>
        <Genre>
          {[...Array(4)].map((num) => {
            return <div key={num}></div>;
          })}
        </Genre>
        <Description>
          {[...Array(8)].map((num) => {
            return <div key={num}></div>;
          })}
        </Description>

        <Accordion>
          {[...Array(4)].map((num) => {
            return <div key={num}></div>;
          })}
        </Accordion>
      </Entry>
    </SupEntry>
  );
};
