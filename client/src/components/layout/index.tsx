import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { Content } from "./Content";
import { BottomNav } from "./BottomNav";
import { augmentFavorite, augmentHistory } from "../../store/actions/local";
import { isLocalEmpty, localFetch, localSet } from "../../lib/utils-local";

export const Layout: React.FC = () => {
  useEffect(() => {
    if (!isLocalEmpty("favorite")) {
      localSet("favorite", []);
      localSet("history", []);
    } else {
      augmentFavorite(localFetch("favorite"));
      augmentHistory(localFetch("history"));
    }
  }, []);

  return (
    <>
      <Router>
        <SideNav></SideNav>
        <TopNav></TopNav>
        <BottomNav></BottomNav>
        <Content></Content>
      </Router>
    </>
  );
};
