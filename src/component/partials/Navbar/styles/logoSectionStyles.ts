import styled from "styled-components";
import { LogoBoxProps } from '../../../../interface/navbar';
import { media } from "../../../utilities/grid";

export const LogoWrapper = styled.div`
  color: white;
  font-weight: bold;
  text0align: left;
  padding-top: 1rem;
  ${media.from.tablet`
    padding: 1rem 2rem;
  `}
`;

export const LogoBox = styled.div<LogoBoxProps>`
  ${props => props?.logoImage && `
    background-image: url(${props.logoImage});
  `}
  height: 3rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: invert(100%);
  ${media.from.tablet`
    width: 12rem;
    height: 5rem;
  `}
`;