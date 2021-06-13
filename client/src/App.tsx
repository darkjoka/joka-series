import React from "react";
import styled from "styled-components";
import { Layout } from "./components/layout";
import { GENERIC_BACKGROUND } from "./constants/colors";

const App: React.FC = () => {
  return (
    <>
      <Main>
        <Layout></Layout>
      </Main>
    </>
  );
};

const Main = styled.div`
  background-color: ${GENERIC_BACKGROUND};
  height: 100vh;
`;

export default App;
