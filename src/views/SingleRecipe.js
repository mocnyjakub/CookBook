import React from "react";

const SingleRecipe = ({
  location: {
    state: { title, image, servings, readyInMinutes },
  },
}) => {
  return (
    <div>
      <h1>Single Recipe</h1>

      <img src={image} alt={title} style={{ width: "500px" }} />
      <h2>{title}</h2>
      <h4>{readyInMinutes} min</h4>
      <h5>servings: {servings}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        debitis neque tempore quia iure laborum quaerat sapiente facere
        deleniti, odio exercitationem expedita, fugiat quas doloremque. Dolor
        iusto officia voluptatem libero?
      </p>
    </div>
  );
};

export default SingleRecipe;
