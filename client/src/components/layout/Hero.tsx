import React, { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { preserveAspectRatio, close } from "../../constants/svg";
import { RootState } from "../../reducers";
import { ThemeState } from "../../reducers/theme";
import pic from "../../assets/img.jpg";
import { useHistory } from "react-router-dom";
import { device } from "../../constants/device";

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  const history = useHistory();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    searchTerm.length >= 3 && history.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <StyledHero>
      <Frost theme={theme}>
        <div></div>
      </Frost>
      <FormHold>
        <FormInner theme={theme}>
          <form onSubmit={handleSearch}>
            <label htmlFor="searchField">Search Input</label>
            <InputHold theme={theme}>
              <input
                minLength={3}
                type="text"
                id="searchField"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              {searchTerm ? (
                <Icon
                  theme={theme}
                  onClick={() => {
                    setSearchTerm("");
                  }}
                >
                  <path d={close.path}></path>
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
`;

const Frost = styled.div<{ theme: ThemeState }>`
  background: url(${pic}) 0 / cover fixed;
  width: inherit;
  height: inherit;

  div {
    width: inherit;
    height: inherit;
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

const FormInner = styled.div<{ theme: ThemeState }>`
  width: 100%;
  height: 78px;
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 16px;
  box-shadow: 0 10px 24px ${({ theme }) => theme.shadow};
  border: 4px solid ${({ theme }) => theme.border};
  display: grid;
  place-items: center;
  max-width: 600px;

  form {
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  }

  input[type="submit"] {
    --webkit-appearance: none;
    background: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.primaryColor};
    height: 42px;
    border: 0;
    margin-left: 10px;
    min-width: 90px;
    border-radius: 4px;
    font-size: 1.1em;
    cursor: pointer;

    @media ${device.tablet} {
      min-width: 120px;
    }
  }

  input[type="submit"]:active {
    box-shadow: none;
  }

  label {
    position: absolute;
    z-index: -1;
  }
`;

const InputHold = styled.div<{ theme: ThemeState }>`
  width: inherit;
  background: ${({ theme }) => theme.tertiaryColor};
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px 8px;
  box-shadow: 0 2px 0 hsla(0, 0%, 100%, 0.15),
    inset 0 2px 2px hsla(0, 0%, 0%, 0.1);

  input[type="text"] {
    width: inherit;
    color: ${({ theme }) => theme.primaryInverse};
    height: 36px;
    width: inherit;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1em;
  }
`;

const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })<{
  theme: ThemeState;
}>`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.accentColor};
  padding: 0px;
  border-radius: 4px;
  margin-left: 8px;
`;

export { Hero };
