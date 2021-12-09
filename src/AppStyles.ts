import styled from "styled-components";

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
  display: flex;
  position: absolute;
  width: 30%;
  left: 0px;
  background-color: pink;
  height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
`;