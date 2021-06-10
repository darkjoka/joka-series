import React from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import { BrowserRouter as Router } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Router>
        <SideNav></SideNav>
        <TopNav></TopNav>
        <BottomNav></BottomNav>
        <Content>{children}</Content>
      </Router>
    </>
  );
};

export { Layout };
