import React, { useEffect } from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import { BrowserRouter as Router } from "react-router-dom";

const Layout: React.FC = () => {
  useEffect(() => {
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", JSON.stringify([]));
      localStorage.setItem("history", JSON.stringify([]));
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

export { Layout };
