import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { Content } from "./Content";
import { BottomNav } from "./BottomNav";

export const Layout: React.FC = () => {
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
