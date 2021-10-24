import React from "react";
import { useHistory } from "react-router-dom";

import { close } from "../../../shared/constants/svg";
import { Pattern } from "../../Pattern";
import { StyledHero, FormHold, FormInner, InputHold, Icon } from "./HeroStyle";

export const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const history = useHistory();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    searchTerm.length >= 3 && history.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <StyledHero>
      <Pattern />
      <FormHold>
        <FormInner>
          <form onSubmit={handleSearch}>
            <label htmlFor="searchField">Search Input</label>
            <InputHold>
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
