import React, { useState } from "react";
import { WHITE, GENERIC_BORDER } from "../../constants/colors";
import { menu, close, preserveAspectRatio } from "../../constants/svg";
import { openSide } from "../../actions/navigation";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const TopNav: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openSide());
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Nav>
      <Icon onClick={handleClick}>
        <path d={menu.path}></path>
      </Icon>
      <form>
        <label htmlFor="searchField">Search Input</label>
        <div>
          <input
            type="text"
            id="searchField"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          {searchTerm ? (
            <XIcon
              onClick={() => {
                setSearchTerm("");
              }}
            >
              <path d={close.path}></path>
            </XIcon>
          ) : (
            ""
          )}
        </div>
      </form>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 64px;
  display: flex;
  transition: transform 0.5s ease-in-out;
  align-items: center;
  justify-items: baseline;
  padding: 0 0.5em;
  position: fixed;
  width: 100%;
  background-color: ${WHITE};
  z-index: 1;
  box-shadow: 0 5px 4px -4px ${GENERIC_BORDER};
  margin: 0;
`;

const Icon = styled.svg.attrs({ viewBox: menu.viewBox, preserveAspectRatio })`
  width: 48px;
  height: 48px;
  fill: gainsboro;
`;

const XIcon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })`
  width: 24px;
  height: 24px;
  fill: gray;
  padding: 0px;
  border-radius: 4px;

  &:hover {
    background-color: darkseagreen;
  }
`;

export { TopNav };
