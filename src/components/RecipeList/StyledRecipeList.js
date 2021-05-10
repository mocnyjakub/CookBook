import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 40px 20px;
  ${breakpoints.largeDesktop} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${breakpoints.tablet} {
    grid-template-columns: 1fr;
    margin: 0;
    width: 90vw;
  }

  li {
    list-style: none;
    margin: 15px;
  }
`;
