import React from "react";
import styled from "styled-components";

interface Episode {
  episodeTitle: string;
  episodeSize: string;
  episodeDownloadLink: string;
}
interface AccordionProps {
  index: number;
  value: boolean;
  handleAccordion: (index: number) => void;
  season: string;
  episodes: Episode[];
}

export const Accordion: React.FC<AccordionProps> = ({
  index,
  value,
  handleAccordion,
  season,
  episodes,
}) => {
  return (
    <>
      <AccordionContainer>
        <AccordionHead
          isOpen={value}
          onClick={() => {
            handleAccordion(index);
          }}
        >
          {season}
        </AccordionHead>
        <AccordionBody isOpen={value}>
          {episodes.map(({ episodeTitle }) => {
            return <div key={episodeTitle}>{episodeTitle}</div>;
          })}
        </AccordionBody>
      </AccordionContainer>
    </>
  );
};

const AccordionContainer = styled.div`
  margin: 8px 0;
  border: 1px solid gainsboro;
  border-radius: 4px;
`;

const AccordionHead = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 52px;
  background-color: white;
  transition: all 0.5s ease;
  position: relative;
  ${({ isOpen }) => {
    return isOpen ? "  border-radius: 4px 4px 0 0;" : "  border-radius: 4px";
  }};

  &::before {
    content: "";
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    height: 26px;
    background: linear-gradient(to bottom, #bbbaba2b, transparent);
    max-height: ${({ isOpen }) => {
      return isOpen ? "26px" : "0;";
    }};
    transition: all 0.5s ease;
  }
`;
const AccordionBody = styled.div<{ isOpen: boolean }>`
  width: 100%;
  background-color: white;
  overflow: hidden;

  max-height: ${({ isOpen }) => {
    return isOpen ? "500px" : "0px";
  }};
  transition: all 0.5s ease;

  div {
    height: 40px;
    background: white;
    margin: 8px 0;
  }
`;
