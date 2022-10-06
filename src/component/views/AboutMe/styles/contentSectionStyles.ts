import styled from "styled-components";
import { media } from "../../../utilities/grid";
import { H1, Button } from "../../../utilities/baseUI";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 2rem 0;
  ${({theme})=>media.from.tablet`
    width: 66%;
    padding: 0 4rem;
    height: 520px;
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
    width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: white; 
    }
    
    /* Handle */
    &:hover{
    ::-webkit-scrollbar-thumb {
    background: ${theme.color.green};
    }
  }
  `}
`;

export const Header = styled(H1)`
`;
export const TextWrapper = styled.h1`
  ${H1};
  text-transform: uppercase;
  color: ${props => props.theme.color.green};
`;
export const LinkButton = styled.a` 
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