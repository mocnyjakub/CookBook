import React, { useState } from "react";
import axios from "axios";
import Router from "../routing/Router";

const Root = () => {
  const [recipes, setRecipes] = useState([]);
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
  return (
    <>
      <Router
        getRecipes={getRecipes}
        recipes={recipes}
        baseImgUrl={baseImgUrl}
      />
    </>
  );
};

export default Root;
