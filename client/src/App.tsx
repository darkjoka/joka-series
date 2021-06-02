import React, { FC } from 'react';
import styled from 'styled-components';
import { GENERIC_BACKGROUND } from './constants/colors';

const App:FC = () => {
  return (
    <Main>

    </Main>
  );
}

const Main = styled.div`
  background-color: ${GENERIC_BACKGROUND};
  height: 100vh;
`


export default App;
