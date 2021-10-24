import React from "react";
import { Link } from "react-router-dom";

import { Section } from "../../Section";
import { openSide } from "../../../store/actions/navigation";
import { toggleDark, toggleLight } from "../../../store/actions/theme";
import { Nav, Hold, Icon, BaseSection, IconSect, ThemeIcon } from "./TopNavStyle";
import { bookMarkFilled, home, menu, moon, recent, sun } from "../../../shared/constants/svg";
// import { getTheme } from "../../../store/reducers/theme";

export const TopNav: React.FC = () => {
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

        {/* {theme.isLight && (
          <ThemeIcon viewBox={sun.viewBox} onClick={toggleDark}>
            <path d={sun.path}></path>
          </ThemeIcon>
        )}

        {!theme.isLight && (
          <ThemeIcon viewBox={moon.viewBox} onClick={toggleLight}>
            <path d={moon.path}></path>
          </ThemeIcon>
        )} */}
      </Hold>
    </Nav>
  );
};
