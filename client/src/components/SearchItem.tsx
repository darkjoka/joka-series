import React from "react";
import { useDispatch } from "react-redux";
import { pushLink } from "../actions/current";
import { openBottom } from "../actions/navigation";

export const SearchItem: React.FC<{ permaLink: string; title: string }> = ({
  permaLink,
  title,
}) => {
  const dispatch = useDispatch();

  const handleDownload = () => {
    dispatch(pushLink(permaLink));
    dispatch(openBottom());
  };
  return <div onClick={handleDownload}>{title}</div>;
};
