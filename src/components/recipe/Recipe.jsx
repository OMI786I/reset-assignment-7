import { useEffect, useState } from "react";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });
  return <div>{recipes.length}</div>;
};

export default Recipe;
