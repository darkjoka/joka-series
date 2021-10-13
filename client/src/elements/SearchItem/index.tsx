import React from "react";

import { Container } from "./SearchItemStyle";
import { ThemeState } from "../../shared/types/types";
import { pushLink } from "../../store/actions/current";
import { openBottom } from "../../store/actions/navigation";

export const SearchItem: React.FC<{
  permaLink: string;
  title: string;
  theme: ThemeState;
}> = ({ permaLink, title }) => {
  const handleDownload = () => {
    pushLink(permaLink);
    openBottom();
  };

  return <Container onClick={handleDownload}>{title}</Container>;
};
