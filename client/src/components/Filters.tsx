import React from "react";
import styled from "styled-components";
import { genreFilter, yearFilter } from "../constants/filters";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSide } from "../actions/navigation";

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeSide());
  };

  return (
    <div>
      <HeadList>
        <p>By Genre</p>
        <p>By Year</p>
      </HeadList>

      <Content>
        <Section>
          {genreFilter.map((genre, index) => {
            return (
              <FilterObj key={index} onClick={handleClick}>
                <Link to={`/filter/${genre.toLowerCase()}`}>{genre}</Link>
              </FilterObj>
            );
          })}
        </Section>
        <Section>
          {yearFilter.map((year, index) => {
            return (
              <FilterObj key={index} onClick={handleClick}>
                <Link to={`/filter/${year}`}>{year}</Link>
              </FilterObj>
            );
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

const FilterObj = styled.div<{ key: number }>`
  display: grid;
  place-items: center;
  background-color: gainsboro;
  width: 95%;
  border-radius: 4px;
  height: 30px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
    width: inherit;
    height: inherit;
    display: grid;
    place-items: center;
  }
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
