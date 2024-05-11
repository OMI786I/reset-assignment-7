import { useEffect, useState } from "react";
import RecipeInner from "./RecipeInner";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeInner key={recipe.recipe_id} recipe={recipe}></RecipeInner>
      ))}
    </div>
  );
};

export default Recipe;
