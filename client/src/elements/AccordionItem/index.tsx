import React from "react";

import { cheveron } from "../../shared/constants/svg";
import { AccordionProps } from "../../shared/types/types";
import {
  AccordionContainer,
  AccordionHead,
  Icon,
  AccordionBody,
  Epi,
  Download,
  Size,
  Button,
} from "./AccordionItemStyle";

export const AccordionItem: React.FC<AccordionProps> = ({ index, value, handleAccordion, season, episodes }) => {
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