import styled from "styled-components";
import { media } from "../../utilities/grid";

export const Container = styled.div`
  margin: 2rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-self: flex-end;
  ${media.from.tablet`
    width: 85%;
    margin: 0;
  `}
`;

export const ThisWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.from.tablet`
    flex-direction: row;
    align-items: flex-start;
  `}
`;
