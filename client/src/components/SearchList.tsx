import React from "react";

interface SearchListProp {
  match: { params: { searchItem: string } };
}

export const SearchList: React.FC<SearchListProp> = ({ match }) => {
  return <>This is the Search List {match.params.searchItem} </>;
};
