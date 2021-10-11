import styled from "styled-components";

import { ThemeState } from "../../shared/types/types";

export const Container = styled.div<{ theme: ThemeState }>`
  display: flex;
  flex-wrap: wrap;
`;
