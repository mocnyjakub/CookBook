import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const Wrapper = styled.div`
  position: relative;
  max-width: 400px;
  ${breakpoints.tablet} {
    max-width: 100%;
  }
`;

export const RecipeListItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  /* width: 90vw;
  max-width: 400px; */
`;

export const TextWrapper = styled.div`
  background-color: ${({ color }) => color};
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transform: translate(-10px);
  position: relative;
  padding: 15px;
  ${breakpoints.tablet} {
    height: 150px;
    width: 60%;
    padding: 0;
    font-size: 14px;
  }
  p {
    margin-left: 10px;
    align-self: center;
  }
`;

export const ImgWrapper = styled.div`
  background-image: url(${({ baseImgUrl, image }) => `${baseImgUrl}${image}`});

  width: 150px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  overflow: hidden;
  ${breakpoints.tablet} {
    /* width: 300px; */
    width: 40%;
    height: 150px;
  }
`;
