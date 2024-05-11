import { useEffect, useState } from "react";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div>This is recipe</div>;
};

export default Recipe;
