import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "./SearchItemStyle";
import { ThemeState } from "../../shared/types/types";
import { pushLink } from "../../store/actions/current";
import { openBottom } from "../../store/actions/navigation";

export const SearchItem: React.FC<{
  permaLink: string;
  title: string;
  theme: ThemeState;
}> = ({ permaLink, title }) => {
  const dispatch = useDispatch();

  const handleDownload = () => {
    dispatch(pushLink(permaLink));
    dispatch(openBottom());
  };
  return <Container onClick={handleDownload}>{title}</Container>;
};
