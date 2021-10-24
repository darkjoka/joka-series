import React from "react";
import { Route, Switch } from "react-router-dom";

import { Hero } from "../Hero";
import { Home } from "../../../views/Home";
import { Filter } from "../../../views/Filter";
import { Search } from "../../../views/Search";
import { History } from "../../../views/History";
import { Favorite } from "../../../views/Favorite";
import { StyledContent, SectionHold } from "./ContentStyle";

export const Content: React.FC = () => {
  return (
    <StyledContent>
      <Hero></Hero>
      <SectionHold>
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
