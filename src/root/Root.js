import React, { useState } from "react";
import axios from "axios";
import Router from "../routing/Router";
import RootContext from "../context";

const Root = () => {
  const [recipes, setRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  const [baseImgUrl, setBaseImgUrl] = useState("");

  const getRecipes = (e) => {
    e.preventDefault();
    console.log(e.target.recipeName.value);
    const recipeName = e.target.recipeName.value;
    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        console.log(res);
        setRecipes([...res.data.results]);
        setBaseImgUrl(res.data.baseUri);
      })
      .catch((err) => console.log(err));
  };

  const addToFav = (recipeId) => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);

    setFavRecipes([...new Set([...favRecipes, selectedRecipe])]);
  };

  const deleteFromFav = (recipeId) => {
    const filteredFavRecipes = favRecipes.filter(
      (recipe) => recipe.id !== recipeId
    );

    setFavRecipes([...filteredFavRecipes]);
  };

  return (
    <RootContext.Provider
      value={{
        recipes,
        baseImgUrl,
        favRecipes,
        getRecipes,
        addToFav,
        deleteFromFav,
      }}
    >
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
