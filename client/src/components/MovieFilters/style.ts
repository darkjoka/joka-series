import styled from "styled-components";

export const HeadList = styled.div<{ filterItem: boolean }>`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  width: 70%;
  position: relative;
  color: ${({ theme: { theme } }) => theme.primaryText};

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, ${({ theme: { theme } }) => theme.brand} 50%, transparent 50%);
    bottom: -16px;
    transform: translateX(
      ${({ filterItem }) => {
        return filterItem && "75%";
      }}
    );
    transition: transform 0.3s ease-out;
  }

  p {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  block-size: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow: auto hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export const FilterObj = styled.div<{ key: number }>`
  display: grid;
  place-items: center;
  background-color: ${({ theme: { theme } }) => theme.primaryBackground};
  width: 95%;
  border-radius: 4px;
  height: 30px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme: { theme } }) => theme.secondaryText};
    width: inherit;
    height: inherit;
    display: grid;
    place-items: center;
  }
`;

export const Section = styled.div`
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
  padding: 8px;
  background-color: ${({ theme: { theme } }) => theme.secondaryBackground};
  box-shadow: 0 4px 0 hsla(0, 0%, 100%, 0.15), inset 0 4px 4px hsla(0, 0%, 0%, 0.1);
  border-radius: 4px;
`;
