import React, { useContext } from "react";
import {
  RecipeListItemWrapper,
  TextWrapper,
  ImgWrapper,
  Wrapper,
} from "./StyledRecipeListItem";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RootContext from "../../context";
import Button from "../Button";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

//TODO:

const colors = ["#DCA11B", "#F79A3A", "#C1C1C1", "#AACCB2", "#FED067"];

const RecipeListItem = ({ id, title, image, readyInMinutes, servings }) => {
  const context = useContext(RootContext);
  const { baseImgUrl, addToFav } = context;

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
      <Button onClickFn={() => addToFav(id)}>Add to fav</Button>
    </Wrapper>
  );
};

export default RecipeListItem;
