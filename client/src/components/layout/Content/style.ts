import styled from "styled-components";

import { device } from "../../../shared/constants/device";

export const StyledContent = styled.main`
  width: 100vw;

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
    @media ${device.laptopM} {
      max-width: 1211.45px;
    }

    @media ${device.laptopL} {
      max-width: 1450px;
    }
  }
`;

export const SectionHold = styled.div(
  ({ theme: { theme } }) => `
  margin-top: -65px;
  background-color: ${theme.primaryBackground};
  min-height: 80vh;
  color: ${theme.brand}
`
);
