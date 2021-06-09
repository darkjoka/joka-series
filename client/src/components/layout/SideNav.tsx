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
    <StyledNav sideNavStatus={sideNavigation} onClick={handlePropagation}>
      <Icon onClick={handleClick}>
        <path d={close.path}></path>
      </Icon>
      <BaseSection>
        <Section label={"Home"}>
          <IconSect viewBox={home.viewBox}>
            <path d={home.path}></path>
          </IconSect>
        </Section>
        <Section label={"Favorited"}>
          <IconSect viewBox={bookMarkFilled.viewBox}>
            <path d={bookMarkFilled.path}></path>
          </IconSect>
        </Section>
        <Section label={"History"}>
          <IconSect viewBox={recent.viewBox}>
            <path d={recent.path}></path>
          </IconSect>
        </Section>
      </BaseSection>
    </StyledNav>
  );
};

const StyledNav = styled.nav<{ sideNavStatus: boolean }>`
  position: fixed;
  height: 100vh;
  width: 70vw;
  overflow-y: scroll;
  background-color: white;
  transform: translateX(
    ${({ sideNavStatus }) => (sideNavStatus ? "0vw" : "-100vw")}
  );
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  box-shadow: 8px 0px 14px 2px rgba(82, 82, 82, 0.6);
  padding: 12px;
`;

const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: gainsboro;
`;
const IconSect = styled.svg.attrs({ preserveAspectRatio })`
  fill: gainsboro;
  width: 24px;
  height: 24px;
`;
const BaseSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 156px;
  justify-content: space-evenly;
`;
export { SideNav };
