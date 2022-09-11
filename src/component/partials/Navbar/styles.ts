import styled from "styled-components";
import { media } from "../../utilities/grid";

export const ThisWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  background: ${props => props.theme.color.greenGradient};
  ${media.from.tablet`
  background: none;
  `}
`;

export const SidebarContainer = styled.div`
  width: 35%;
  ${media.from.tablet`
    width: 30%;
    background: transparent;
  `}
`;

export const MainContainer = styled.div`
  width: 65%;
  ${media.from.tablet`
    width: 70%;
    background-color: white;
  `}
`;