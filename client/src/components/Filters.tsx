import React from "react";
import styled from "styled-components";

const genreFilter: String[] = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "History",
  "Horror",
  "Mystery",
  "New Series",
  "New Start",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const yearFilter: String[] = [
  "2005",
  "2007",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];

const Filters: React.FC = () => {
  return (
    <div>
      <HeadList>
        <p>By Genre</p>
        <p>By Year</p>
      </HeadList>

      <Content>
        <Section>
          {genreFilter.map((genre) => {
            return <FilterObj>{genre}</FilterObj>;
          })}
        </Section>
        <Section>
          {yearFilter.map((genre) => {
            return <FilterObj>{genre}</FilterObj>;
          })}
        </Section>
      </Content>
    </div>
  );
};

const HeadList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, gray 50%, transparent 50%);
    bottom: -16px;
  }
`;

const Content = styled.div`
  block-size: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow: auto hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

const FilterObj = styled.div`
  display: grid;
  place-items: center;
  background-color: gainsboro;
  width: 95%;
  border-radius: 4px;
  height: 30px;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  place-items: center;
  grid-gap: 8px;
  font-size: 0.9em;
  width: 100%;
  margin-top: 32px;
  scroll-snap-align: start;
`;
export { Filters };
