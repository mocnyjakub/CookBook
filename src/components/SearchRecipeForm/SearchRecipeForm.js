import React from "react";
import {
  FormWrapper,
  InputWrapper,
  StyledInput,
  Button,
  StyledLabel,
  StyledSelect,
} from "./StyledSearchRecipeForm";

const SearchRecipeForm = ({ getRecipes }) => {
  return (
    <FormWrapper onSubmit={getRecipes}>
      {/* <label htmlFor="recipeName">Type recipe name: </label> */}
      <InputWrapper>
        <StyledInput
          type="text"
          name="recipeName"
          // id="recipeName"
          placeholder="Type recipe name here..."
        />
        <Button type="submit">search</Button>
      </InputWrapper>
      <StyledLabel htmlFor="recipeNumber">
        Choose number of recipes:
      </StyledLabel>
      <StyledSelect name="recipeNumber" id="recipeNumber">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </StyledSelect>
    </FormWrapper>
  );
};

export default SearchRecipeForm;
