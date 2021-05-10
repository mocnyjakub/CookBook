import React, { useContext } from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import SearchRecipeForm from "../components/SearchRecipeForm/SearchRecipeForm";
import styled from "styled-components";
import { breakpoints } from "../breakpoints";
import RootContext from "../context";

const RecipeWrapper = styled.div`
  margin: 50px 0;
  ${breakpoints.tablet} {
    width: 90vw;
  }
`;

const Home = () => {
  const context = useContext(RootContext);

  return (
    <>
      <SearchRecipeForm />
      <RecipeWrapper>
        <RecipeList recipesArray={context.recipes} />
      </RecipeWrapper>
    </>
  );
};

export default Home;
