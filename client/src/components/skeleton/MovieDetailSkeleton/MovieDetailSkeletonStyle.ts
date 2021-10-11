import styled from "styled-components";

export const SupEntry = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const Entry = styled.div`
  padding: 8px 8px 0;
  width: inherit;
  max-width: 800px;
`;

export const Hero = styled.div`
  aspect-ratio: 1067/600;
  width: 100%;
  background: #dddddd;
  border-radius: 8px;
  margin: 16px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;

    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 2;

    animation: load 1.5s infinite;
  }
`;

export const Genre = styled.div`
  width: 100%;
  height: 32px;
  background-color: #f2f2f2f2;
  display: flex;
  margin: 16px 0;
  align-items: center;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  div {
    width: 100%;
    height: 16px;
    background-color: #dddddd;
    margin: 4px;
    border-radius: 2px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 2;
    animation: load 1.5s infinite;
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2f2;
  padding: 8px;
  align-items: center;
  border-radius: 4px;
  margin: 16px 0;
  position: relative;
  overflow: hidden;

  div {
    width: 100%;
    height: 16px;
    background-color: #dddddd;
    margin: 4px;
    border-radius: 2px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;

    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 2;

    animation: load 1.5s infinite;
  }
`;

export const Accordion = styled.div`
  background-color: #f2f2f2f2;
  width: 100%;
  margin: 16px 0;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  div {
    width: 100%;
    height: 52px;
    background-color: #dddddd;
    margin: 4px;
    border-radius: 8px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;

    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 2;

    animation: load 1.5s infinite;
  }
`;
