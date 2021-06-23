import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GENERIC_BACKGROUND } from "../../constants/colors";
import { close, preserveAspectRatio } from "../../constants/svg";
import { RootState } from "../../reducers";
import { closeBottom } from "../../actions/navigation";
import { SDetail } from "../skeleton/SDetail";
import { Error } from "../Error";
import { pushData } from "../../actions/current";
import { DetailState } from "../../reducers/current";
import { Detail } from "../Detail";
import { ThemeProps } from "./SideNav";

const BottomNav: React.FC<ThemeProps> = ({ light }) => {
  const [bottomNavigation, link, detail]: [boolean, string, DetailState] =
    useSelector((state: RootState) => {
      return [
        state.navigation.isBottomSectOpen,
        state.current.link,
        state.current.detail,
      ];
    });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(closeBottom());
  };

  useEffect(() => {
    const handleCurrent = (data: DetailState): void => {
      dispatch(pushData(data));
      setLoading(false);
    };

    setLoading(true);
    setError(false);
    (async () => {
      try {
        const response = await fetch("http://localhost:4000/per");
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
  }, [link, dispatch]);

  return (
    <StyledNav isBottomNavOpen={bottomNavigation}>
      <InnerNav>
        <Icon onClick={handleClick}>
          <path d={close.path}></path>
        </Icon>
      </InnerNav>
      <Inner>
        {!loading && !error && <Detail {...detail} />}
        {loading && <SDetail />}
        {error && <Error />}
      </Inner>
    </StyledNav>
  );
};

const StyledNav = styled.div<{ isBottomNavOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: rgba(0, 25, 25, 0.4);
  padding: 0 8px;
  transition: transform 0.3s ease;
  transform: translateY(
    ${({ isBottomNavOpen }) => (isBottomNavOpen ? "0vh" : "100vh")}
  );
`;

const Inner = styled.div`
  background-color: ${GENERIC_BACKGROUND};
  height: 92%;
  border-radius: 26px 26px 0 0;
  overflow-y: auto;
  overscroll-behavior-y: contain;
`;
const InnerNav = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: white;
`;
export { BottomNav };
