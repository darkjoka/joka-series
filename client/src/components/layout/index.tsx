import React from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import { BrowserRouter as Router } from "react-router-dom";

const Layout: React.FC = () => {
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
