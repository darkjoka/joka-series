import React from "react";
interface FilterListProp {
    match: { params: { filterItem: string}}
}

export const FilterList: React.FC<FilterListProp> = ({ match }) => {
  return <>This is the Filtered List {match.params.filterItem} </>;
};
