import React from "react";
import {
  RecipeListItemWrapper,
  TextWrapper,
  ImgWrapper,
  AddToFavButton,
  Wrapper,
} from "./StyledRecipeListItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const colors = ["#DCA11B", "#F79A3A", "#C1C1C1", "#AACCB2", "#FED067"];

const RecipeListItem = ({
  id,
  title,
  image,
  baseImgUrl,
  readyInMinutes,
  servings,
}) => {
  return (
    <Wrapper>
      <StyledLink
        to={{
          pathname: `/single-recipe/${title.replace(/\s/g, "")}`,
          state: {
            title,
            image: `${baseImgUrl}${image}`,
            readyInMinutes,
            servings,
          },
        }}
      >
        <RecipeListItemWrapper>
          <ImgWrapper baseImgUrl={baseImgUrl} image={image}>
            {/* <img src={`${baseImgUrl}${image}`} alt={title} /> */}
          </ImgWrapper>
          <TextWrapper
            color={colors[Math.floor(Math.random() * colors.length)]}
          >
            <p>{title}</p>
          </TextWrapper>
        </RecipeListItemWrapper>
      </StyledLink>
      <AddToFavButton>Add to fav</AddToFavButton>
    </Wrapper>
  );
};

export default RecipeListItem;
