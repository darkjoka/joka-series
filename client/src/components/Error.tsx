import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorBox>
      <p>There was An error</p>
    </ErrorBox>
  );
};

const ErrorBox = styled.div`
  width: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;
  color: red;

  p {
    padding: 24px;
    border: 1px solid red;
    position: relative;
  }
`;
export { Error };
