const RecipeInner = ({ recipe }) => {
  const { recipe_name } = recipe;
  return <div>{recipe_name}</div>;
};

export default RecipeInner;
