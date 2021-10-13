import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Section } from "../../Section";
import { RootState } from "../../../store/reducers";
import { openSide } from "../../../store/actions/navigation";
import { toggleDark, toggleLight } from "../../../store/actions/theme";
import { Nav, Hold, Icon, BaseSection, IconSect, ThemeIcon } from "./TopNavStyle";
import { bookMarkFilled, home, menu, moon, recent, sun } from "../../../shared/constants/svg";

export const TopNav: React.FC = () => {
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  return (
    <Nav theme={theme}>
      <Hold>
        <Icon theme={theme} onClick={openSide}>
          <path d={menu.path}></path>
        </Icon>
        <BaseSection theme={theme}>
          <Link to="/">
            <Section theme={theme} label={"Home"}>
              <IconSect theme={theme} viewBox={home.viewBox}>
                <path d={home.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/favorite">
            <Section theme={theme} label={"Favorited"}>
              <IconSect theme={theme} viewBox={bookMarkFilled.viewBox}>
                <path d={bookMarkFilled.path}></path>
              </IconSect>
            </Section>
          </Link>

          <Link to="/history">
            <Section theme={theme} label={"History"}>
              <IconSect theme={theme} viewBox={recent.viewBox}>
                <path d={recent.path}></path>
              </IconSect>
            </Section>
          </Link>
        </BaseSection>
        {theme.isLight && (
          <ThemeIcon theme={theme} viewBox={sun.viewBox} onClick={toggleDark}>
            <path d={sun.path}></path>
          </ThemeIcon>
        )}

        {!theme.isLight && (
          <ThemeIcon theme={theme} viewBox={moon.viewBox} onClick={toggleLight}>
            <path d={moon.path}></path>
          </ThemeIcon>
        )}
      </Hold>
    </Nav>
  );
};
