import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { close, preserveAspectRatio } from "../../../constants/svg";
import { RootState } from "../../../store/reducers";
import { closeBottom } from "../../../store/actions/navigation";
import { SDetail } from "../../skeleton/SDetail";
import { Error } from "../../Error";
import { pushData } from "../../../store/actions/current";
import { Detail } from "../../Detail";
import { device } from "../../../constants/device";
import { DetailState, ThemeState } from "../../../shared/types/types";

const BottomNav: React.FC = () => {
  const [bottomNavigation, link, detail, theme]: [boolean, string, DetailState, ThemeState] = useSelector(
    (state: RootState) => {
      return [state.navigation.isBottomSectOpen, state.current.link, state.current.detail, state.theme];
    }
  );

  // const addToHistory = () => {
  //   const [title, imageSource, teaser, permaLink] = [
  //     detail.title,
  //     detail.heroImage,
  //     detail.description,
  //     link,
  //   ];

  //   let history = handleLocalFetch("history");

  //   if (
  //     !history.some((movie) => {
  //       return movie.title === title;
  //     })
  //   ) {
  //     history = history.concat([{ title, imageSource, teaser, permaLink }]);
  //   }
  //   localStorage.setItem("history", JSON.stringify(history)); // update local storage
  // };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(closeBottom());
  };

  useEffect(() => {
    if (link && bottomNavigation) {
      console.log("here got");
      const broken = link.split("/");
      const handleCurrent = (data: DetailState): void => {
        dispatch(pushData(data));
        console.log("also");
        // addToHistory();
        console.log("final");

        setLoading(false);
      };

      setLoading(true);
      setError(false);
      (async () => {
        try {
          const response = await fetch(`https://jokaseries.herokuapp.com/detail/${broken[broken.length - 1]}`);
          const result = await response.json();

          handleCurrent(result.data);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      })();

      return () => {
        setLoading(false);
        setError(false);
      };
    }
  }, [link, dispatch, bottomNavigation, detail]);

  return (
    <StyledNav theme={theme} isBottomNavOpen={bottomNavigation}>
      <InnerNav>
        <Icon theme={theme} onClick={handleClick}>
          <path d={close.path}></path>
        </Icon>
      </InnerNav>
      <Inner theme={theme}>
        {!loading && !error && <Detail {...detail} />}
        {loading && <SDetail />}
        {error && <Error />}
      </Inner>
    </StyledNav>
  );
};

const StyledNav = styled.div<{ isBottomNavOpen: boolean; theme: ThemeState }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => {
      return theme.isLight
        ? `rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, .2)`
        : `rgba(0, 0, 0, .3),
      rgba(0, 0, 0, .2)`;
    }}
  );
  backdrop-filter: blur(0.9rem);
  padding: 0 8px;
  transition: transform 0.3s ease;
  transform: translateY(${({ isBottomNavOpen }) => (isBottomNavOpen ? "0vh" : "100vh")});
  color: ${({ theme }) => theme.primaryInverse};

  @media ${device.tablet} {
    padding: 4px 100px;
  }
`;

const Inner = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  height: 92%;
  border-radius: 26px 26px 0 0;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  border: 4px solid ${({ theme }) => theme.accentColor};
`;
const InnerNav = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.accentColor};
  cursor: pointer;
`;
export { BottomNav };
