import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../utilities/grid";
import { H1 } from "../../../utilities/baseUI";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 2rem 0;
  ${({ theme }) => media.from.tablet`
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

export const Title = styled.div`
  background: black;
  color: white;
  font-size: 13px;
  font-weight: bold;
  padding: 0.5rem;
  text-transform: capitalize;
`;

export const TextWrapper = styled.h1`
  ${H1};
  margin: 0;
  text-transform: capitalize;
  color: ${props => props.theme.color.green};
`;

export const ListBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap;
`;

export const ItemList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    text-transform: capitalize;
    ${media.from.desktop`
      width: 47%;
      margin-right: 5px;
    `}
`;

export const ItemListTitle = styled.span`
  font-weight: 600;
  margin-bottom: 25px;
  padding-right: 5px;
`;

export const ButtonBox= styled.div`
`;

export const LinkButton = styled(Link)` 
  border: 0.2rem solid ${props => props.theme.color.green};
  padding: 0.6rem 1.25rem;
  color: ${props => props.theme.color.gray};
  text-align: center;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  margin-right: 1rem;
`;