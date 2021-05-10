import styled from "styled-components";

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 40px 20px;
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    list-style: none;
    margin: 15px;
  }
`;
