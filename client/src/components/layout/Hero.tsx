import React, { FC } from "react";
import styled from "styled-components";

const Hero: FC = () => {
  return (
    <StyledHero>
      <Frost />
      <FormHold>
        <FormInner>
          <form>
            <label htmlFor="sField">Search Input</label>
            <input type="text" id="sField" />
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

  input[type="text"] {
    height: 42px;
    border: none;
    width: inherit;
    outline: none;
    border-radius: 8px;
    background-color: gainsboro;
    padding: 0 4px;
    font-size: 1em;
    padding: 0 24px 0 8px;
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

export { Hero };
