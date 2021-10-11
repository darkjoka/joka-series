import React from "react";
import styled from "styled-components";
import { Hero } from "../Hero";
import { Route, Switch } from "react-router-dom";
import { IndexList } from "../../IndexList";
import { Favorite } from "../../Favorite";
import { FilterList } from "../../FilterList";
import { HistoryList } from "../../HistoryList";
import { device } from "../../../shared/constants/device";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { SearchList } from "../../SearchList";
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
            <Route path="/" exact component={IndexList} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/filter/:filterItem" component={FilterList} />
            <Route path="/history" component={HistoryList} />{" "}
            <Route path="/search/:searchItem" component={SearchList} />
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
