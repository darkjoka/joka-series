import React from "react";
import styled from "styled-components";
import { AccordionList } from "./AccordionList";

export const Detail: React.FC = () => {
  return (
    <SupEntry>
      <Entry>
        <Hero image={""}></Hero>
        <Title>Sample Title</Title>
        <Genre>
          {["Romance", "Action", "Thriller"].map((value) => {
            return <span>{value}</span>;
          })}
        </Genre>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          cupiditate deserunt rerum quidem consequatur quam voluptatem numquam,
          tempora necessitatibus aliquid vitae a deleniti facere quia sint magni
          mollitia officia beatae?
        </Description>
        <AccordionList></AccordionList>
      </Entry>
    </SupEntry>
  );
};

const SupEntry = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Entry = styled.div`
  padding: 8px 8px 0;
  width: inherit;
  max-width: 800px;
`;
const Title = styled.p`
  text-align: center;
`;
const Genre = styled.div`
  width: 100%;
  display: flex;
  margin: 16px 0;
  align-items center;
  border-radius: 4px;
  flex-wrap: wrap;

  span {
    margin: 2px 4px;
  }

`;

const Hero = styled.div<{ image: string }>`
  aspect-ratio: 1067/600;
  width: 100%;
  background: url(${({ image }) => image}), #dddddd;
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
`;

const Description = styled.div`
  margin: 16px 0px;
`;
