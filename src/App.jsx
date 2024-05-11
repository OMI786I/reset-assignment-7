import "./App.css";
import Banner from "./components/banner/banner";
import Header from "./components/header/Header";
import Recipe from "./components/recipe/Recipe";
import RecipeList from "./components/recipe/RecipeList";

function App() {
  return (
    <>
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
        <div className="flex justify-between">
          <Recipe></Recipe>
          <RecipeList></RecipeList>
        </div>
      </div>
    </>
  );
}

export default App;
