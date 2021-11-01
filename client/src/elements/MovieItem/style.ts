import styled from "styled-components";

import { device } from "../../shared/constants/device";
import { bookMark, preserveAspectRatio, camera } from "../../shared/constants/svg";
import { darken, lighten, opacify } from "../../lib/utils-theme";

export const Card = styled.div(
  ({ theme: { theme } }) => `
  width: 100%;
  border: 2px solid ${theme.secondaryBackground};
  padding: 4px;
  border-radius: 4px 4px 0 0;
  margin: 8px 0px;
  position: relative;
  background-color: ${theme.tertiaryBackground};
  font-size: 0.9em;
  display: flex;
  color: ${theme.secondaryText};

  @media ${device.mobileM} {
    font-size: 1em;
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: 222.29px;
    margin: 8px;
    padding: 2px;
  }
`
);

export const ImageHold = styled.div`
  display: grid;
  place-items: center;
  background-color: ${({ theme: { theme } }) => theme.secondaryBackground};
  border-radius: 4px;
  aspect-ratio: 250/350;
  height: 150px;

  &:hover {
    cursor: pointer;
  }

  object {
    border-radius: inherit;
    aspect-ratio: inherit;
    height: inherit;
    display: grid;
    place-items: center;
  }

  @media ${device.tablet} {
    height: 300px;
    border-radius: 0;
    aspect-ratio: 250/350;
    width: 214.29px;

    object {
      height: 300px;
      border-radius: inherit;
      aspect-ratio: 250/350;
    }
  }
`;

export const CardContent = styled.div<{
  teaser: string | undefined;
}>`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: ${({ teaser }) => (!teaser ? "space-between" : "space-between")};

  p {
    margin: 4px;
  }

  @media ${device.tablet} {
    margin-top: -68px;
    margin-left: -1px;
    width: calc(100% + 3px);
    background-color: ${({ theme: { theme } }) => theme.primaryBackground};
    height: 100%;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  width: calc(100% - 12px);
  margin-bottom: 8px;
  color: ${({ theme: { theme } }) => theme.primaryText};

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.svg.attrs({
  viewBox: bookMark.viewBox,
  preserveAspectRatio,
})(
  ({ theme: { theme } }) => `
  width: 24px;
  height: 24px;
  position: absolute;
  right: 5px;
  fill: ${theme.secondaryText};

  &:hover {
    @media ${device.laptop}{
    cursor: pointer;
    fill: ${theme.brand};
  }
  }

  &:active {
    fill: ${theme.brand}
  }

  @media ${device.tablet} {
    top: 5px;
  }
`
);

export const CamIcon = styled.svg.attrs({
  viewBox: camera.viewBox,
  preserveAspectRatio,
})`
  width: 32px;
  height: 32px;
  fill: ${({ theme: { theme } }) => theme.secondaryText};

  @media ${device.tablet} {
    transform: translate3d(-10px, -30px, 0);
  }
`;

export const AltButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  font-size: 0.9em;

  @media ${device.mobileM} {
    font-size: 1em;
  }
`;

export const Favorite = styled.div(
  ({ theme: { theme } }) => `
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid ${theme.primaryText};
  width: 86px;
  border-radius: 4px;
  color: ${theme.secondaryText};

  &:hover{
    @media ${device.laptop}{
      cursor: pointer;
      background-color: ${opacify(lighten(theme.primaryText, 0.7), 20)};
      border-color: ${opacify(lighten(theme.primaryText, 0.7), 20)};
      color: ${theme.primaryText};

    }
  }
  &:active{
    background-color: ${opacify(lighten(theme.primaryText, 0.7), 20)};
    border-color: ${opacify(lighten(theme.primaryText, 0.7), 20)};
    color: ${theme.primaryText};
  }


  @media ${device.mobileM} {
    width: 102px;
  }
`
);

export const Download = styled.div(
  ({ theme: { theme } }) => `
  height: 32px;
  display: grid;
  place-items: center;
  background-color: ${theme.primaryText};
  color: ${theme.primaryBackground};
  width: 78px;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;

  &:hover {
    @media ${device.laptop}{
    cursor: pointer;
    border: 1px solid ${theme.primaryText};
    background-color: ${darken(theme.primaryText, 0.5)};
    color: ${theme.primaryBackground};

  }
}

  &:active {
    border: 1px solid ${theme.primaryText};
    background-color: ${darken(theme.primaryText, 0.5)}
    color: ${theme.primaryBackground};
  }
  

  @media ${device.mobileM} {
    width: 102px;
  }
`
);
