import React from "react";
import styled from "styled-components";
import { cheveron, preserveAspectRatio } from "../../constants/svg";
import { DISCORD_DARK, RED, GENERIC_BORDER, GREEN } from "../../constants/colors";
import { device } from "../../constants/device";
import { AccordionProps } from "../../shared/types/types";

export const Accordion: React.FC<AccordionProps> = ({ index, value, handleAccordion, season, episodes }) => {
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

          <Icon isOpen={value}>
            <path d={cheveron.path}></path>
          </Icon>
        </AccordionHead>
        <AccordionBody isOpen={value}>
          {episodes.map(({ episodeTitle, episodeSize, episodeDownloadLink }) => {
            return (
              <Epi key={episodeDownloadLink}>
                {episodeTitle}
                <Download>
                  <Size>{episodeSize}</Size>
                  <Button>
                    <a href={episodeDownloadLink}> Download</a>
                  </Button>
                </Download>
              </Epi>
            );
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  cursor: pointer;

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
  // background-color: white;
  overflow: hidden;
  padding: 0 10px;

  ${({ isOpen }) => {
    return isOpen ? "max-height:2000px;" : "max-height:0px;";
  }};
  transition: all 0.5s ease;
`;

const Icon = styled.svg.attrs({
  viewBox: cheveron.viewBox,
  preserveAspectRatio,
})<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  fill: white;

  ${({ isOpen }) => {
    return isOpen
      ? `background: ${RED};`
      : `transform: rotate(180deg);
      background: ${DISCORD_DARK}; `;
  }}
  transition: all 0.5s ease;
`;

const Epi = styled.div`
  height: 64px;
  margin: 8px 0;
  // background: white;
  border-bottom: 1px solid ${GENERIC_BORDER};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-last-child(1) {
    border: none;
  }
`;

const Download = styled.div`
  display: flex;
  align-items: center;
`;

const Size = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  } ;
`;

const Button = styled.div`
  margin-left: 16px;
  background: ${GREEN};
  padding: 8px;
  border-radius: 4px;

  a {
    color: white;
    text-decoration: none;
  }
`;
