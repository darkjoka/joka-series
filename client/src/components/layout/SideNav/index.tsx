import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Section } from "../../Section";
import { MovieFilters } from "../../MovieFilters";
import { RootState } from "../../../store/reducers";
import { ThemeState } from "../../../shared/types/types";
import { closeSide } from "../../../store/actions/navigation";
import { bookMarkFilled, close, home, recent } from "../../../shared/constants/svg";
import { SuperNav, StyledNav, Icon, BaseSection, IconSect, StyledOther } from "./SideNav";

export const SideNav: React.FC = () => {
  const [sideNavigation, theme]: [boolean, ThemeState] = useSelector((state: RootState) => {
    return [state.navigation.isSideNavOpen, state.theme];
  });

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
          <MovieFilters theme={theme}></MovieFilters>
        </div>
      </StyledNav>

      <StyledOther onClick={handleClick}></StyledOther>
    </SuperNav>
  );
};
