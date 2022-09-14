import styled from "styled-components";
import { media } from "../../../utilities/grid";

export const Container = styled.div`
  display: flex;
  ${media.from.tablet`
   max-width: 33%;
   justify-content: center;
  `}   
`;

export const WrapperMedia = styled.div`
  position: relative;
  diplay: flex;
  justify-content: center;

  ${({ theme }) => media.from.tablet`
  border: none;
  box-shadow: 4px 4px 15px 0px rgb(0 0 0 / 10%);
  :before{
    position: absolute;
    content: "";
    top: -30px;
    right: -30px;
    display: inline-block;
    border: 1rem solid ${theme.color.green};
    z-index: -1;
    width: 100%;
    height: 95%;
  }
 `}   
`;

export const Media = styled.img` 
  width: 90%;
  border: 1rem solid ${props=>props.theme.color.green};

  ${media.from.tablet`
    width: 100%;
    border: none;
  `};
`;