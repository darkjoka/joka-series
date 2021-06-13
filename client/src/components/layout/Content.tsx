import React from "react";
import { Hero } from "./Hero";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { IndexList } from "../IndexList";
import { FavoriteList } from "../FavoriteList";
import { FilterList } from "../FilterList";
import { HistoryList } from "../HistoryList";

const Content: React.FC = () => {
  return (
    <StyledContent>
      <Hero></Hero>
      <section>
        <Switch>
          <Route path="/" exact component={IndexList} />
          <Route path="/favorite" component={FavoriteList} />
          <Route path="/filter/:filterItem" component={FilterList} />
          <Route path="/history" component={HistoryList} />{" "}
        </Switch>
      </section>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 100vw;
  padding-top: 64px;

  section {
    padding: 8px;
    min-height: 50vh;
  }
`;

export { Content };
