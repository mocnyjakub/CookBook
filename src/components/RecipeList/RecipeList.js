import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { StyledUl } from "./StyledRecipeList";

const RecipeList = ({ recipes, baseImgUrl }) => {
  return (
    <StyledUl>
      {recipes.map((recipe) => (
        <li>
          <RecipeListItem {...recipe} baseImgUrl={baseImgUrl} />
        </li>
      ))}
    </StyledUl>
  );
};

export default RecipeList;
