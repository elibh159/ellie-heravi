import styled from "styled-components";
import { media } from "./grid";

export const Button = styled.button`
  border: 0.2rem solid ${props => props.theme.color.green};
  padding: 0.6rem 1.25rem;
  color: ${props => props.theme.color.gray};
  text-align: center;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

export const H1 = styled.div`
  font-size: 1.5rem;
  text-align: left;
  font-weight: bold;
  text-transform: capitalize;
  ${media.from.tablet`
   font-size: 2rem;
`}
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.color.lightgray};
  ${media.from.tablet`
    line-height: 1.6rem;
  `}
`;