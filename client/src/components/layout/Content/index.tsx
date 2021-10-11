import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { Hero } from "../Hero";
import { Home } from "../../Home";
import { Filter } from "../../Filter";
import { Search } from "../../Search";
import { History } from "../../History";
import { Favorite } from "../../Favorite";
import { RootState } from "../../../store/reducers";
import { StyledContent, SectionHold } from "./ContentStyle";

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
