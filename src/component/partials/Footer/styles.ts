import styled from "styled-components";
import { FooterIconProps } from "../../../interface/footer";
export const ThisWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  bottom: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
`;

export const Title = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  font-size:16px;
`;
export const FooterLink = styled.a`
  cursor: pointer;
`;
export const FotterIcon = styled.span<FooterIconProps>`
  ${props => props?.icon && `
    background: url(${props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
  padding: 0.65rem;
  margin: 0.5rem;
`;