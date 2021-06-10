import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSide } from "../../actions/navigation";
import { RootState } from "../../reducers";
import styled from "styled-components";
import {
  preserveAspectRatio,
  close,
  home,
  recent,
  bookMarkFilled,
} from "../../constants/svg";
import { Section } from "../Section";
import { Filters } from "../Filters";
import { Link } from "react-router-dom";

const SideNav: React.FC = () => {
  const sideNavigation = useSelector(
    (state: RootState) => state.navigation.isSideNavOpen
  );

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(closeSide());
  };

  const handlePropagation = (event: React.BaseSyntheticEvent): void => {
    event.stopPropagation();
  };

  return (
    <SuperNav sideNavStatus={sideNavigation}>
      <StyledNav onClick={handlePropagation}>
        <Icon onClick={handleClick}>
          <path d={close.path}></path>
        </Icon>

        <BaseSection>
          <Link to="/" onClick={handleClick}>
            <Section label={"Home"}>
              <IconSect viewBox={home.viewBox}>
                <path d={home.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/favorite" onClick={handleClick}>
            <Section label={"Favorited"}>
              <IconSect viewBox={bookMarkFilled.viewBox}>
                <path d={bookMarkFilled.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/history" onClick={handleClick}>
            <Section label={"History"}>
              <IconSect viewBox={recent.viewBox}>
                <path d={recent.path}></path>
              </IconSect>
            </Section>
          </Link>
        </BaseSection>

        <div>
          <Filters></Filters>
        </div>
      </StyledNav>

      <StyledOther onClick={handleClick}></StyledOther>
    </SuperNav>
  );
};

const SuperNav = styled.nav<{ sideNavStatus: boolean }>`
  position: fixed;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  transform: translateX(
    ${({ sideNavStatus }) => (sideNavStatus ? "0vw" : "-100vw")}
  );

  display: flex;
`;
const StyledNav = styled.div`
  width: 70vw;
  overflow-y: scroll;
  height: 100vh;
  background-color: white;
  padding: 12px;
  border-right: 4px solid gainsboro;
`;

const StyledOther = styled.div`
  width: 30vw;
`;
const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: gainsboro;
`;
const IconSect = styled.svg.attrs({ preserveAspectRatio })`
  fill: gainsboro;
  width: 20px;
  height: 20px;
`;
const BaseSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: black;
  }
`;
export { SideNav };
