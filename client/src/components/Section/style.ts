import styled from "styled-components";

import { device } from "../../shared/constants/device";
import { ThemeState } from "../../shared/types/types";

export const Sect = styled.div<{ theme: ThemeState }>`
  display: flex;
  align-items: flex-end;
  padding: 8px;
  border-radius: 4px;

  svg {
    margin-right: 12px;
  }

  @media ${device.laptopL} {
    flex-direction: column;
    align-items: center;

    svg {
      margin: 0;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.accentColor};

    svg {
      fill: ${({ theme }) => theme.accentColor};
    }
  }
`;
