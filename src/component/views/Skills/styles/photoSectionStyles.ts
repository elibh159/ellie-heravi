import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-top: 1rem solid ${props => props.theme.color.green};
  border-right: 1rem solid ${props => props.theme.color.green};
  width: 20%;   
  display: flex;
  padding: 1rem;
`;

export const Media = styled.img`

`;