import styled from "styled-components";
import { media } from "../../../utilities/grid";
import { H1 } from "../../../utilities/baseUI";
import { PortfolioProps } from "../../../../interface/portfolio";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 2rem 0;
  ${({ theme }) => media.from.tablet`
    width: 90%;
    padding: 2rem;
    height: 30rem;
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
  margin-top: 1rem;
  ${media.from.desktop`
    position: relative;
  `}
`;

export const ItemList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    margin: 1rem;
    ${media.from.desktop`
      width: 13rem;
    `}
`;

export const ItemListImage = styled.img`
  width: 100%;
`;
export const ItemListTitle = styled.span`
  font-weight: 600;
  margin-bottom: 25px;
  padding-right: 5px;
`;

export const ButtonBox= styled.div`
`;

export const LinkButton = styled.div<PortfolioProps>` 
  margin-top: 1rem;
  color: ${ ({active, theme})  => (active ? theme.color.green : theme.color.gray)};
  border-bottom: 0.1rem solid ${ ({active, theme})  => (active ? theme.color.green : theme.color.gray)};
  padding: 0.6rem 1.25rem;
  text-align: center;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
`;