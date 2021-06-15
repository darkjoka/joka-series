import React from "react";
import styled from "styled-components";

interface AccordionProps {
  index: number;
  value: boolean;
  handleAccordion: (index: number) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  index,
  value,
  handleAccordion,
}) => {
  return (
    <>
      <AccordionContainer>
        <AccordionHead
          isOpen={value}
          onClick={() => {
            handleAccordion(index);
          }}
        ></AccordionHead>
        <AccordionBody isOpen={value}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
  ${({ isOpen }) => {
    return isOpen ? "  border-radius: 4px 4px 0 0;" : "  border-radius: 4px";
  }};
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
