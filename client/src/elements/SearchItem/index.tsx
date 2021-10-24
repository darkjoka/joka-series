import React from "react";

import { Container } from "./SearchItemStyle";
import { pushLink } from "../../store/actions/current";
import { openBottom } from "../../store/actions/navigation";

export const SearchItem: React.FC<{
  permaLink: string;
  title: string;
}> = ({ permaLink, title }) => {
  const handleDownload = () => {
    pushLink(permaLink);
    openBottom();
  };

  return <Container onClick={handleDownload}>{title}</Container>;
};
