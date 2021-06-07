import React from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SideNav></SideNav>
      <TopNav></TopNav>
      <BottomNav></BottomNav>
      <Content>{children}</Content>
    </>
  );
};

export { Layout };
