import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { Section } from "../../Section";
import { MovieFilters } from "../../MovieFilters";
import { RootState } from "../../../store/reducers";
import { closeSide } from "../../../store/actions/navigation";
import { bookMarkFilled, close, home, recent } from "../../../shared/constants/svg";
import { SuperNav, StyledNav, Icon, BaseSection, IconSect, StyledOther } from "./style";

export const SideNav: React.FC = () => {
  const sideNavigation: boolean = useSelector((state: RootState) => state.navigation.isSideNavOpen);

  const sideRef = React.useRef(null);

  const handlePropagation = (event: React.BaseSyntheticEvent): void => {
    event.stopPropagation();
  };

  return (
    <SuperNav sideNavStatus={sideNavigation}>
      <StyledNav ref={sideRef} onClick={handlePropagation}>
        <Icon onClick={closeSide}>
          <path d={close.path}></path>
        </Icon>

        <BaseSection>
          <Link href="/" passHref>
            <a onClick={closeSide}>
              <Section label={"Home"}>
                <IconSect viewBox={home.viewBox}>
                  <path d={home.path}></path>
                </IconSect>
              </Section>
            </a>
          </Link>

          <Link href="/favorite" passHref>
            <a onClick={closeSide}>
              <Section label={"Favorited"}>
                <IconSect viewBox={bookMarkFilled.viewBox}>
                  <path d={bookMarkFilled.path}></path>
                </IconSect>
              </Section>
            </a>
          </Link>

          <Link href="/history" passHref>
            <a onClick={closeSide}>
              <Section label={"History"}>
                <IconSect viewBox={recent.viewBox}>
                  <path d={recent.path}></path>
                </IconSect>
              </Section>
            </a>
          </Link>
        </BaseSection>

        <div>
          <MovieFilters parent={sideRef}></MovieFilters>
        </div>
      </StyledNav>

      <StyledOther onClick={closeSide}></StyledOther>
    </SuperNav>
  );
};
