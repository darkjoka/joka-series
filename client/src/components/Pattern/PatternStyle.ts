import styled from "styled-components";

export const Wrapper = styled.div`
  margin: -600px 0 0 0;
`;

export const Row = styled.div`
  height: 60px;
  white-space: nowrap;

  > div {
    width: 0;
    height: 0;
    border: 150px solid transparent;
    border-bottom: 300px solid #cc2133;
    position: relative;
    display: inline-block;
    margin-left: -70px;
    -webkit-filter: drop-shadow(-12px 10px 10px rgba(0, 0, 0, 0.4));
    filter: drop-shadow(-12px 10px 10px rgba(0, 0, 0, 0.4));
  }

  &:nth-child(5n) > div {
    border-bottom-color: #cc2133;
  }
  &:nth-child(5n + 1) > div {
    border-bottom-color: #d35a45;
  }
  &:nth-child(5n + 2) > div {
    border-bottom-color: #f6d633;
  }
  &:nth-child(5n + 3) > div {
    border-bottom-color: #b8d6a2;
  }
  &:nth-child(5n + 4) > div {
    border-bottom-color: #1e3a50;
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;
