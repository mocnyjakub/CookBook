import styled from "styled-components";

export const RecipeListItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  max-width: 400px;
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
`;

export const AddToFavButton = styled.button`
  border: none;
  outline: none;
  font-family: "Open Sans";
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: #111;
  color: #fff;
  font-weight: 500;
`;
