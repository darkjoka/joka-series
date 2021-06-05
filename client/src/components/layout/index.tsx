import React from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TopNav></TopNav>
      <Content>{children}</Content>
    </>
  );
};

export { Layout };
