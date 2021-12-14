import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../../utilities/grid";
import { MenuProps } from "../../../../interface/navbar";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  ${media.from.tablet`
    align-items: flex-end;
  `}
`;
export const SubLink = styled(Link)`
  padding: 1rem;
  margin: 0;
  text-decoration: none;
  color: ${props => props.theme.color.white};
  font-weight: bold;  
  ${media.from.tablet`
    margin: 2rem;
    color: black;
  `}
  &:hover {
    background-color: ${props => props.theme.color.green};
    ${media.from.tablet`
      color: white;
    `}
  }
`;

export const MenuWrapper = styled.div<MenuProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s linear;
  ${media.from.tablet`
    display: flex;  
    flex-direction: row;
    justify-content: flex-end;
  `}
`;
export const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 1rem;
  background: ${props => props.theme.color.white};
  ${media.from.tablet`
    display: none;
  `}
`;
const BarBase = css`
  width: 1.5rem;
  height: 0.2rem;
  background: ${props => props.theme.color.green};
  border-radius: 5px;
  margin-bottom: 0.3rem;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 3px;
`;
export const Bar1 = styled.span<MenuProps>`
  ${BarBase};
  transform: ${({ isOpen }) =>
    isOpen ? "rotateZ(45deg) translate(4px, 0)" : "rotate(0)"};
`;
export const Bar2 = styled.span<MenuProps>`
  ${BarBase};
  opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  transform: ${({ isOpen }) => (isOpen ? "translateX(20px)" : "translateX(0)")};
`;
export const Bar3 = styled.span<MenuProps>`
  ${BarBase};
  margin-bottom: 0;
  transform: ${({ isOpen }) =>
  isOpen ? "rotateZ(-45deg) translate(3px, 2px)" : "rotate(0)"};
`;