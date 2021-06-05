import React, { FC } from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";

const Layout: FC = () => {
  return (
    <>
      <TopNav></TopNav>
      <Content></Content>
    </>
  );
};

export { Layout };
