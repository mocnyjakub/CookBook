import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import MainTemplate from "../templates/MainTemplate";
import FavRecipes from "../views/FavRecipes";
import Home from "../views/Home";
import SingleRecipe from "../views/SingleRecipe/SingleRecipe";

const Main = styled.div`
  padding-top: 30px;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Router = ({ getRecipes, recipes, baseImgUrl }) => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Main>
            <Route
              exact
              path={routes.home}
              component={() => (
                <Home
                  getRecipes={getRecipes}
                  recipes={recipes}
                  baseImgUrl={baseImgUrl}
                />
              )}
            />
            <Route path={routes.favRecipes} component={FavRecipes} />
            <Route path={routes.singleRecipe} component={SingleRecipe} />
          </Main>
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
