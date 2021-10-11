import styled from "styled-components";

import { ThemeState } from "../../../shared/types/types";
import { device } from "../../../shared/constants/device";

export const StyledContent = styled.main`
  width: 100vw;
  padding-top: 64px;

  section {
    padding: 8px;
    min-height: 50vh;
    padding-top: 64px;
    margin: 0 auto;

    @media ${device.tablet} {
      display: flex;
      flex-wrap: wrap;
      max-width: 732px;
      justify-content: flex-start;
    }

    @media ${device.laptop} {
      max-width: 972px;
    }
  }
`;

export const SectionHold = styled.div<{ theme: ThemeState }>`
  margin-top: -65px;
  background: ${({ theme }) => theme.primBG};
  min-height: 80vh;
  color: ${({ theme }) => theme.primaryInverse};
`;
