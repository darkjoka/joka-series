import React from "react";
import { Link } from "react-router-dom";

import { Section } from "../../Section";
import { openSide } from "../../../store/actions/navigation";
import { toggleDark, toggleDim, toggleLight } from "../../../store/actions/theme";
import { Nav, Hold, Icon, BaseSection, IconSect, ThemeIcon } from "./TopNavStyle";
import { bookMarkFilled, dim, home, menu, moon, recent, sun } from "../../../shared/constants/svg";
import { getTheme } from "../../../store/reducers/theme";
import { Theme } from "../../../shared/types/types";

export const TopNav: React.FC = () => {
  const theme = getTheme();

  return (
    <Nav>
      <Hold>
        <Icon onClick={openSide}>
          <path d={menu.path}></path>
        </Icon>
        <BaseSection>
          <Link to="/">
            <Section label={"Home"}>
              <IconSect viewBox={home.viewBox}>
                <path d={home.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/favorite">
            <Section label={"Favorited"}>
              <IconSect viewBox={bookMarkFilled.viewBox}>
                <path d={bookMarkFilled.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/history">
            <Section label={"History"}>
              <IconSect viewBox={recent.viewBox}>
                <path d={recent.path}></path>
              </IconSect>
            </Section>
          </Link>
        </BaseSection>

        {theme.name === Theme.dark && (
          <ThemeIcon viewBox={sun.viewBox} onClick={toggleLight}>
            <path d={sun.path}></path>
          </ThemeIcon>
        )}
        {theme.name === Theme.light && (
          <ThemeIcon viewBox={dim.viewBox} onClick={toggleDim}>
            <path d={dim.path}></path>
          </ThemeIcon>
        )}
        {theme.name === Theme.dim && (
          <ThemeIcon viewBox={moon.viewBox} onClick={toggleDark}>
            <path d={moon.path}></path>
          </ThemeIcon>
        )}
      </Hold>
    </Nav>
  );
};
