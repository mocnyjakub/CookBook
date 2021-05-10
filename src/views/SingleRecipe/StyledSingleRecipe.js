import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const Wrapper = styled.div`
  display: flex;
  margin: 50px 50px 0;
  min-height: 500px;
  ${breakpoints.smallDesktop} {
    flex-direction: column;
    min-height: 800px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 2;
  margin-right: 40px;
  padding: 0 10px;
  max-height: 80%;
  h2 {
    font-size: 1.6rem;
  }
  h4,
  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTitle};
  }
  ${breakpoints.smallDesktop} {
    order: 2;
    margin-top: 50px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 3;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  border: 3px solid #333333;
  &::after {
    content: "";
    border: 2px solid #353535;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
    border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
`;
