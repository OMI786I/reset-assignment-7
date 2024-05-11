import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/banner";
import Header from "./components/header/Header";
import Recipe from "./components/recipe/Recipe";
import RecipeList from "./components/recipe/RecipeList";
import toast, { Toaster } from "react-hot-toast";

import WantToCookComp from "./components/recipe/WantToCookComp";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const addToRecipeList = (recipe) => {
    const isExist = recipeList.find(
      (reciped) => reciped.recipe_id == recipe.recipe_id
    );

    if (!isExist) {
      setRecipeList([...recipeList, recipe]);
    } else {
      toast.error("Already exists");
    }
  };

  const wantToCookFunc = (recipe) => {
    const WantToCookList = [...wantToCook, recipe];
    setWantToCook(WantToCookList);
  };
  console.log(wantToCook);
  return (
    <>
      <Toaster />
      <Header></Header>

      <Banner></Banner>
      <div className="mt-10">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold text-center">Our Recipes</h1>
          <p className="text-center md:mt-5">
            You can select one of our recipes from below and you will get all
            the calories and time and also choose whether you want to cook or
            not
          </p>
        </div>
        <div className="flex justify-between lg:flex-row flex-col">
          <Recipe addToRecipeList={addToRecipeList}></Recipe>
          <div>
            <RecipeList
              recipeList={recipeList}
              wantToCookFunc={wantToCookFunc}
            ></RecipeList>
            <WantToCookComp wantToCook={wantToCook}></WantToCookComp>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
