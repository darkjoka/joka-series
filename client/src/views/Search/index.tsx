import React from "react";

import { Container } from "./SearchStyle";
import { Error } from "../../elements/Error";
import { SearchProp } from "../../shared/types/types";
import { SearchItem } from "../../elements/SearchItem";

export const Search: React.FC<SearchProp> = ({ match }) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchItems, setSearchItems] = React.useState([]);

  React.useEffect(() => {
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
            return <SearchItem key={title} permaLink={permaLink} title={title} />;
          })}
        </Container>
      )}
      {loading && "loading..."}
      {error && <Error />}
    </>
  );
};
