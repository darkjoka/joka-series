import styled from "styled-components";

export const Container = styled.div(
  ({ theme: { theme } }) => `
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px;
  border: 2px solid ${theme.secondaryText};
  color: ${theme.primaryText};
  background-color: ${theme.primaryColor};
  margin: 8px;

  &:hover {
    background-color: ${theme.tertiaryBackground};
  }
`
);
