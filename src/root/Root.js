import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";
import SearchRecipeForm from "../components/SearchRecipeForm";
import axios from "axios";
import { Navigation } from "../components/Navigation";

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const Main = styled.div`
  padding-top: 30px;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  const [recipes, setRecipes] = useState([]);

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
      })
      .catch((err) => console.log(err));
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Navigation />
          <Main>
            <SearchRecipeForm getRecipes={getRecipes} />
          </Main>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
