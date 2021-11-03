import styled from "styled-components";
import { device } from "../../shared/constants/device";
import { camera, preserveAspectRatio } from "../../shared/constants/svg";

export const SupEntry = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const Entry = styled.div`
  padding: 8px 8px 0;
  width: inherit;
  max-width: 800px;
`;

export const Title = styled.p`
  text-align: center;
  color: ${({ theme: { theme } }) => theme.primaryText};
`;

export const Genre = styled.div`
  width: 100%;
  display: flex;
  margin: 16px 0;
  align-items: center;
  border-radius: 4px;
  flex-wrap: wrap;
  color: ${({ theme: { theme } }) => theme.secondaryText};

  span {
    margin: 2px 4px;
  }
`;

export const Hero = styled.div`
  aspect-ratio: 1067/600;
  width: 100%;
  background-size: cover;
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
  background-color: ${({ theme: { theme } }) => theme.secondaryBackground};

  object {
    border-radius: inherit;
    aspect-ratio: inherit;
    height: inherit;
    display: grid;
    place-items: center;
  }
`;

export const Description = styled.div`
  margin: 16px 0px;
  color: ${({ theme: { theme } }) => theme.secondaryText};
`;

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
