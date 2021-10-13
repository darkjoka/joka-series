import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Container } from "./SearchStyle";
import { Error } from "../../elements/Error";
import { RootState } from "../../store/reducers";
import { SearchProp } from "../../shared/types/types";
import { SearchItem } from "../../elements/SearchItem";

export const Search: React.FC<SearchProp> = ({ match }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchItems, setSearchItems] = useState([]);

  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  useEffect(() => {
    setLoading(true);
    setError(false);
    (async () => {
      try {
        const response = await fetch(`https://jokaseries.herokuapp.com/search/${match.params.searchItem}`);
        const result = await response.json();
        setSearchItems(result.data);
      } catch (e) {
        setLoading(false);
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    })();
  }, [match.params.searchItem]);
  return (
    <>
      {!loading && !error && (
        <Container>
          {searchItems.map(({ title, permaLink }) => {
            return <SearchItem key={title} permaLink={permaLink} title={title} theme={theme} />;
          })}
        </Container>
      )}
      {loading && "loading..."}
      {error && <Error />}
    </>
  );
};
