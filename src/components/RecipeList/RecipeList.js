import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { StyledUl } from "./StyledRecipeList";

const RecipeList = ({ recipesArray }) => {
  return (
    <StyledUl>
      {recipesArray.map((recipe) => (
        <li>
          <RecipeListItem {...recipe} />
        </li>
      ))}
    </StyledUl>
  );
};

export default RecipeList;
