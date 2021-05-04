import React from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import SearchRecipeForm from "../components/SearchRecipeForm/SearchRecipeForm";
import styled from "styled-components";

const RecipeWrapper = styled.div`
  margin: 50px 0;
`;
const Home = ({ getRecipes, recipes, baseImgUrl }) => {
  return (
    <>
      <SearchRecipeForm getRecipes={getRecipes} />
      <RecipeWrapper>
        <RecipeList recipes={recipes} baseImgUrl={baseImgUrl} />
      </RecipeWrapper>
    </>
  );
};

export default Home;
