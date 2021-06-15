import React, { useState } from "react";
import { Accordion } from "./Accordion";

export const AccordionList = () => {
  const [accState, setAccState] = useState([false, false, false]);

  const handleAccordion = (index: number) => {
    const interest = accState[index];
    const bool = accState.map((value) => {
      return false;
    });

    bool[index] = !interest;

    setAccState(bool);
  };
  return (
    <>
      {accState.map((value, index) => {
        return (
          <Accordion
            key={index}
            value={value}
            index={index}
            handleAccordion={handleAccordion}
          />
        );
      })}
    </>
  );
};
