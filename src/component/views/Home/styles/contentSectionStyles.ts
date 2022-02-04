import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 2rem;
`;

export const Header = styled.span`
  font-size: 2em;
  text-align: left;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-size: 0.75em;
`;

export const TextWrapper = styled.div`
  position: absolute;
`;