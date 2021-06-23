import React from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const Layout: React.FC = () => {
  const theme = useSelector((state: RootState) => {
    return state.theme.isLight;
  });

  return (
    <>
      <Router>
        <SideNav light={theme}></SideNav>
        <TopNav light={theme}></TopNav>
        <BottomNav light={theme}></BottomNav>
        <Content light={theme}></Content>
      </Router>
    </>
  );
};

export { Layout };
