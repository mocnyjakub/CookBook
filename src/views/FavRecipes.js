import React, { useContext } from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import RootContext from "../context";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 60px 10px 0;
`;

const FavRecipes = () => {
  const context = useContext(RootContext);

  return (
    <Wrapper>
      <h1>Favorite Recipes</h1>
      <RecipeList recipesArray={context.favRecipes} />
    </Wrapper>
  );
};

export default FavRecipes;
