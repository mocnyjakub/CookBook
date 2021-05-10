import React, { useContext } from "react";
import RootContext from "../../context";
import {
  FormWrapper,
  InputWrapper,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "./StyledSearchRecipeForm";
import Button from "../Button";

const SearchRecipeForm = () => {
  const context = useContext(RootContext);

  return (
    <FormWrapper onSubmit={context.getRecipes}>
      {/* <label htmlFor="recipeName">Type recipe name: </label> */}
      <InputWrapper>
        <StyledInput
          type="text"
          name="recipeName"
          // id="recipeName"
          placeholder="Type recipe name here..."
        />
        <Button submitBtn>search</Button>
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
