import React, { useState } from "react";
import { seasonEp } from "../../shared/types/types";
import { Accordion } from "../Accordion";

export const AccordionList: React.FC<seasonEp> = ({ seasonEpisode }) => {
  const [accState, setAccState] = useState(() => {
    const acc: boolean[] = [];
    for (let i = 0; i < seasonEpisode.length; i++) {
      acc.push(false);
    }
    return acc;
  });

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
      {seasonEpisode.map((data, index) => {
        return (
          <Accordion key={index} value={accState[index]} index={index} {...data} handleAccordion={handleAccordion} />
        );
      })}
    </>
  );
};
