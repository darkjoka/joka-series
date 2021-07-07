import React, { useEffect } from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { augmentFavorite, augmentHistory } from "../../actions/local";
import { handleLocalFetch } from "../MovieCard";

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", JSON.stringify([]));
      localStorage.setItem("history", JSON.stringify([]));
    } else {
      dispatch(augmentFavorite(handleLocalFetch("favorite")));
      dispatch(augmentHistory(handleLocalFetch("history")));
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

export { Layout };
