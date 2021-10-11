import React from "react";
import styled from "styled-components";
import { Hero } from "../Hero";
import { Route, Switch } from "react-router-dom";
import { Home } from "../../Home";
import { Favorite } from "../../Favorite";
import { Filter } from "../../Filter";
import { History } from "../../History";
import { device } from "../../../shared/constants/device";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { Search } from "../../Search";
import { ThemeState } from "../../../shared/types/types";

export const Content: React.FC = () => {
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });
  return (
    <StyledContent>
      <Hero></Hero>
      <SectionHold theme={theme}>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/filter/:filterItem" component={Filter} />
            <Route path="/history" component={History} />
            <Route path="/search/:searchItem" component={Search} />
          </Switch>
        </section>
      </SectionHold>
    </StyledContent>
  );
};

const StyledContent = styled.main`
  width: 100vw;
  padding-top: 64px;

  section {
    padding: 8px;
    min-height: 50vh;
    padding-top: 64px;
    margin: 0 auto;

    @media ${device.tablet} {
      display: flex;
      flex-wrap: wrap;
      max-width: 732px;
      justify-content: flex-start;
    }

    @media ${device.laptop} {
      max-width: 972px;
    }
  }
`;

const SectionHold = styled.div<{ theme: ThemeState }>`
  margin-top: -65px;
  background: ${({ theme }) => theme.primBG};
  min-height: 80vh;
  color: ${({ theme }) => theme.primaryInverse};
`;
