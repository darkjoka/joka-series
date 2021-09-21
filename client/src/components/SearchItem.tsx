import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { pushLink } from "../actions/current";
import { openBottom } from "../actions/navigation";
import { ThemeState } from "../types";

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

const Container = styled.div<{ theme: ThemeState }>`
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 0 8px 0 8px;
  border: 2px solid ${({ theme }) => theme.tertiaryColor};
  color: ${({ theme }) => theme.primaryInverse};
  background-color: ${({ theme }) => theme.primaryColor};
`;
