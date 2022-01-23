import styled from "styled-components";

import { device } from "../../../shared/constants/device";
import { close, preserveAspectRatio } from "../../../shared/constants/svg";

export const StyledHero = styled.div`
  height: 10em;
  margin-bottom: 4em;
  overflow: hidden;
`;

export const FormHold = styled.div`
  height: 64px;
  width: 100vw;
  padding: 0 12px;
  position: absolute;
  display: grid;
  place-items: center;
  top: 8em;
`;

export const FormInner = styled.div(
  ({ theme: { theme } }) => `
  width: 100%;
  height: 78px;
  background-color: ${theme.primaryBackground};
  border-radius: 16px;
  box-shadow: 0 10px  ${24}px ${-4.2 / theme.shadowStrength}px ${theme.shadow};
  // border: 4px solid ${theme.shadow};
  display: grid;
  place-items: center;
  max-width: 600px;

  form {
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  }

  input[type="submit"] {
    --webkit-appearance: none;
    background: ${theme.brand};
    color: ${theme.primaryText};
    height: 42px;
    border: 0;
    margin-left: 10px;
    min-width: 90px;
    border-radius: 4px;
    font-size: 1.1em;
    cursor: pointer;

    @media ${device.tablet} {
      min-width: 120px;
    }
  }

  input[type="submit"]:active {
    box-shadow: none;
  }

  label {
    position: absolute;
    z-index: -1;
  }
`
);

export const InputHold = styled.div(
  ({ theme: { theme } }) => `
  width: inherit;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px 8px;
  box-shadow: 0 2px 0 hsla(0, 0%, 100%, 0.15), inset 0 2px 2px hsla(0, 0%, 0%, 0.1);

  input[type="text"] {
    width: inherit;
    height: 36px;
    color: ${theme.primaryText};
    width: inherit;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1em;
  }
`
);

export const Icon = styled.svg.attrs({ viewBox: close.viewBox, preserveAspectRatio })(
  ({ theme: { theme } }) => `
  width: 20px;
  height: 20px;
  fill: ${theme.primaryText};
  background-color: ${theme.brand};
  padding: 0px;
  border-radius: 4px;
  margin-left: 8px;
`
);
