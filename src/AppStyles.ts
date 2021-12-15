import styled from "styled-components";
import { media } from "../src/component/utilities/grid";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  background-color: black;
  justify-content: space-between;
`;

export const Sidebar = styled.div`
  display: none;
  ${media.from.tablet`
    display: flex;
    position: absolute;
    width: 30%;
    left: 0px;
    background: linear-gradient(to right, rgba(28, 202, 162, 1) 0%, rgba(49, 209, 129, 1) 100%);
    height: 100vh;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
  `}
`;