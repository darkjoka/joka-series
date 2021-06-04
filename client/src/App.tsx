import React, { FC } from 'react';
import styled from 'styled-components';
import { GENERIC_BACKGROUND } from './constants/colors';
import GlobalStyle from './components/GlobalStyle';

const App:FC = () => {
  return (<>
    <GlobalStyle></GlobalStyle>
    <Main>
    </Main>
  </>);
}

const Main = styled.div`
  background-color: ${GENERIC_BACKGROUND};
  height: 100vh;
`


export default App;
