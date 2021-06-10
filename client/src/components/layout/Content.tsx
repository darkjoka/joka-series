import React from "react";
import { Hero } from "./Hero";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IndexList } from "../IndexList";
import { FavoriteList } from "../FavoriteList";
import { FilterList } from "../FilterList";
interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <StyledContent>
      <Hero></Hero>
      <Router>
        <section>
          <Switch>
            <Route path="/" exact component={IndexList} />
            <Route path="/favorite" component={FavoriteList} />
            <Route path="/filter/:filterItem" component={FilterList} />
          </Switch>
        </section>
      </Router>
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
