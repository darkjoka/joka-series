import React, { useEffect, useState } from "react";
import { Error } from "./Error";

interface SearchListProp {
  match: { params: { searchItem: string } };
}

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
          return (
            <a key={title} href={permaLink}>
              {title}
            </a>
          );
        })}
      {loading && "loading..."}
      {error && <Error />}
    </>
  );
};
