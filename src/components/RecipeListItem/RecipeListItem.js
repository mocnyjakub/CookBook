import React from "react";
import {
  RecipeListItemWrapper,
  TextWrapper,
  ImgWrapper,
  AddToFavButton,
} from "./StyledRecipeListItem";

const colors = [
  "#DCA11B",
  "#F79A3A",
  "#C1C1C1",
  "#AACCB2",
  "#FED067",
  "#C1C1C1",
];

const RecipeListItem = ({ id, title, image, baseImgUrl }) => {
  return (
    <RecipeListItemWrapper>
      <ImgWrapper baseImgUrl={baseImgUrl} image={image}>
        {/* <img src={`${baseImgUrl}${image}`} alt={title} /> */}
      </ImgWrapper>
      <TextWrapper color={colors[Math.floor(Math.random() * colors.length)]}>
        <p>{title}</p>
        <AddToFavButton>add to fav</AddToFavButton>
      </TextWrapper>
    </RecipeListItemWrapper>
  );
};

export default RecipeListItem;
