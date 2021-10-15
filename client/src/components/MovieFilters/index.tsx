import React from "react";
import { Link } from "react-router-dom";

import { ThemeState } from "../../shared/types/types";
import { closeSide } from "../../store/actions/navigation";
import { genreFilter, yearFilter } from "../../shared/constants/filters";
import { HeadList, Content, FilterObj, Section } from "./MovieFiltersStyle";

export const MovieFilters: React.FC<{ theme: ThemeState }> = ({ theme }) => {
  return (
    <div>
      <HeadList theme={theme}>
        <p>By Genre</p>
        <p>By Year</p>
      </HeadList>

      <Content>
        <Section>
          {genreFilter.map((genre, index) => {
            return (
              <FilterObj theme={theme} key={index} onClick={closeSide}>
                <Link to={`/filter/${genre.toLowerCase()}`}>{genre}</Link>
              </FilterObj>
            );
          })}
        </Section>
        <Section>
          {yearFilter.map((year, index) => {
            return (
              <FilterObj theme={theme} key={index} onClick={closeSide}>
                <Link to={`/filter/${year}`}>{year}</Link>
              </FilterObj>
            );
          })}
        </Section>
      </Content>
    </div>
  );
};
