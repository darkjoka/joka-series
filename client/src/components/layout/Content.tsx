import React from "react";
import { Hero } from "./Hero";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { IndexList } from "../IndexList";
import { FavoriteList } from "../FavoriteList";
import { FilterList } from "../FilterList";
import { HistoryList } from "../HistoryList";
import { device } from "../../constants/device";
import { GENERIC_BACKGROUND, DISCORD_DARK } from "../../constants/colors";
import { ThemeProps } from "./SideNav";

const Content: React.FC<ThemeProps> = ({ light }) => {
  return (
    <StyledContent>
      <Hero light={light}></Hero>
      <SectionHold light={light}>
        <section>
          <Switch>
            <Route path="/" exact component={IndexList} />
            <Route path="/favorite" component={FavoriteList} />
            <Route path="/filter/:filterItem" component={FilterList} />
            <Route path="/history" component={HistoryList} />{" "}
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

const SectionHold = styled.div<{ light: boolean }>`
  margin-top: -65px;
  background: ${({ light }) => (light ? GENERIC_BACKGROUND : DISCORD_DARK)};
`;

export { Content };
