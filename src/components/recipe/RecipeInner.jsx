import { CiAlarmOn } from "react-icons/ci";
import { FaFireFlameCurved } from "react-icons/fa6";

const RecipeInner = ({ recipe }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card w-auto md:w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl w-60 h-48"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-gray-500">{short_description}</p>
          <h3 className="text-xl font-bold">
            ingredients: {ingredients.length}
          </h3>
          <ul>
            {ingredients.map((ingredi) => (
              <li className="list-disc text-left text-gray-500">{ingredi}</li>
            ))}
          </ul>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <CiAlarmOn /> {preparing_time}
            </div>
            <div className="flex items-center gap-1">
              <FaFireFlameCurved />
              {calories}
            </div>
          </div>
          <div className=" flex w-full ">
            <button className="btn btn-accent">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInner;
