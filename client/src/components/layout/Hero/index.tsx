import React, { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { close } from "../../../shared/constants/svg";
import { RootState } from "../../../store/reducers";
import { StyledHero, FormHold, FormInner, InputHold, Icon } from "./HeroStyle";

export const Hero: React.FC = () => {
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
