import { useEffect, useState } from "react";
import RecipeInner from "./RecipeInner";

const Recipe = ({ addToRecipeList }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {recipes.map((recipe) => (
        <RecipeInner
          key={recipe.recipe_id}
          recipe={recipe}
          addToRecipeList={addToRecipeList}
        ></RecipeInner>
      ))}
    </div>
  );
};

export default Recipe;
