import React, { useState } from "react";
import styled from "styled-components";
import { preserveAspectRatio, close } from "../../constants/svg";

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StyledHero>
      <Frost />
      <FormHold>
        <FormInner>
          <form>
            <label htmlFor="searchField">Search Input</label>
            <InputHold>
              <input
                type="text"
                id="searchField"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              {searchTerm ? (
                <Icon
                  onClick={() => {
                    setSearchTerm("");
                  }}
                >
                  <path d={close}></path>
                </Icon>
              ) : (
                ""
              )}
            </InputHold>
            <input type="submit" value="Search" />
          </form>
        </FormInner>
      </FormHold>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  height: 10em;
  margin-bottom: 4em;
  overflow: hidden;
  background: url(d.jpg) 0 / cover fixed;
`;

const Frost = styled.div`
  background: hsla(0, 0%, 100%, 0.5);
  width: inherit;
  height: inherit;
  display: grid;
  place-items: center;
  font-family: "Arial rounded mt";
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    bottom: -100px;
    left: -100px;
    background: url(${""}) 0 / cover fixed;
    background-color: gainsboro;
    filter: blur(20px);
  }
`;

const FormHold = styled.div`
  height: 64px;
  width: 100vw;
  padding: 0 12px;
  position: absolute;
  display: grid;
  place-items: center;
  top: calc(64px + 8em);
`;

const FormInner = styled.div`
  width: 100%;
  height: 78px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(82, 82, 82, 0.2);
  display: grid;
  place-items: center;

  form {
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  }

  input[type="submit"] {
    background-color: gainsboro;
    border: none;
    height: 42px;
    margin-left: 10px;
    min-width: 80px;
    border-radius: 8px;
    font-size: 1.1em;
  }

  label {
    position: absolute;
    z-index: -1;
  }
`;

const InputHold = styled.div`
  width: inherit;
  background-color: gainsboro;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px;

  input[type="text"] {
    height: 36px;
    width: inherit;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1em;
  }
`;

const Icon = styled.svg.attrs({ viewBox: "-6 -6 24 24", preserveAspectRatio })`
  width: 24px;
  height: 24px;
  fill: gray;
  padding: 0px;
  border-radius: 4px;

  &:hover {
    background-color: darkseagreen;
  }
`;

export { Hero };
