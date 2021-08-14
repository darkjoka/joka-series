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
import { device } from "../../constants/device";
import { ThemeState } from "../../types";

export const SideNav: React.FC = () => {
  const [sideNavigation, theme]: [boolean, ThemeState] = useSelector(
    (state: RootState) => {
      return [state.navigation.isSideNavOpen, state.theme];
    }
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
      <StyledNav theme={theme} onClick={handlePropagation}>
        <Icon theme={theme} onClick={handleClick}>
          <path d={close.path}></path>
        </Icon>

        <BaseSection theme={theme}>
          <Link to="/" onClick={handleClick}>
            <Section label={"Home"}>
              <IconSect theme={theme} viewBox={home.viewBox}>
                <path d={home.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/favorite" onClick={handleClick}>
            <Section label={"Favorited"}>
              <IconSect theme={theme} viewBox={bookMarkFilled.viewBox}>
                <path d={bookMarkFilled.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/history" onClick={handleClick}>
            <Section label={"History"}>
              <IconSect theme={theme} viewBox={recent.viewBox}>
                <path d={recent.path}></path>
              </IconSect>
            </Section>
          </Link>
        </BaseSection>

        <div>
          <Filters theme={theme}></Filters>
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
const StyledNav = styled.div<{ theme: ThemeState }>`
  width: 70vw;
  overflow-y: scroll;
  height: 100vh;
  ${({ theme }) => {
    return `background: ${theme.primaryColor}; border-right: 4px solid ${theme.accentColor};`;
  }}
  padding: 12px;

  @media ${device.tablet} {
    width: 30vw;
  }
`;

const StyledOther = styled.div`
  width: 30vw;

  @media ${device.tablet} {
    width: 70vw;
  }
`;
const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => {
    return theme.accentColor;
  }};
  cursor: pointer;
`;
const IconSect = styled.svg.attrs({ preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => {
    return theme.primaryInverse;
  }};
  cursor: pointer;
`;
const BaseSection = styled.div<{ theme: ThemeState }>`
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryInverse};
  }
`;
