import React from "react";
import { Content } from "./Content";
import { Hero } from "./Hero";
import { TopNav } from "./TopNav";

const Layout = () => {
  return (
    <>
      <TopNav></TopNav>
      <Hero></Hero>
      <Content></Content>
    </>
  );
};

export { Layout };
