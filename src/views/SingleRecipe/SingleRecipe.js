import React from "react";
import { Wrapper, TextWrapper, ImageWrapper } from "./StyledSingleRecipe";

const SingleRecipe = ({
  location: {
    state: { title, image, servings, readyInMinutes },
  },
}) => {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          debitis neque tempore quia iure laborum quaerat sapiente facere
          deleniti, odio exercitationem expedita, fugiat quas doloremque. Dolor
          iusto officia voluptatem libero?
        </p>
        <h4>cooking time: {readyInMinutes} minutes</h4>
        <h5>servings: {servings}</h5>
      </TextWrapper>
      <ImageWrapper image={image} />
    </Wrapper>
  );
};

export default SingleRecipe;
