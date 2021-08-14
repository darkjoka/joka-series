import React, { useEffect, useState } from "react";
import { SearchListProp } from "../types";
import { Error } from "./Error";
import { SearchItem } from "./SearchItem";

export const SearchList: React.FC<SearchListProp> = ({ match }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    (async () => {
      try {
        const response = await fetch(
          `https://jokaseries.herokuapp.com/search/${match.params.searchItem}`
        );
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
      {!loading &&
        !error &&
        searchItems.map(({ title, permaLink }) => {
          return <SearchItem key={title} permaLink={permaLink} title={title} />;
        })}
      {loading && "loading..."}
      {error && <Error />}
    </>
  );
};
