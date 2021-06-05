import React from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";

const Layout: React.FC = () => {
  return (
    <>
      <TopNav></TopNav>
      <Content></Content>
    </>
  );
};

export { Layout };
