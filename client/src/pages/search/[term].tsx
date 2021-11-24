import { useRouter } from "next/router";

const Search = () => {
  const {
    query: { term },
  } = useRouter();
  return <p>Search Results for {term}</p>;
};

export default Search;
