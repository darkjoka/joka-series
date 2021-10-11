import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { Content } from "./Content";
import { BottomNav } from "./BottomNav";
import { augmentFavorite, augmentHistory } from "../../store/actions/local";
import { isLocalEmpty, localFetch, localSet } from "../../shared/localStorage";

export const Layout: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLocalEmpty("favorite")) {
      localSet("favorite", []);
      localSet("history", []);
    } else {
      dispatch(augmentFavorite(localFetch("favorite")));
      dispatch(augmentHistory(localFetch("history")));
    }
  }, [dispatch]);

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
