import React, { useState } from "react";
import styled from "styled-components";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AccordionContainer>
        <AccordionHead
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></AccordionHead>
        <AccordionBody isOpen={isOpen}>
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
