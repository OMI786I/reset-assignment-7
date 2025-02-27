import RecipeListInner from "./RecipeListInner";

const RecipeList = ({ recipeList, wantToCookFunc }) => {
  let index = 1;

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          Want to cook : {recipeList.length}
        </h1>
      </div>
      <hr></hr>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {recipeList.map((list) => (
              <RecipeListInner
                key={list.recipe_id}
                list={list}
                index={index++}
                wantToCookFunc={wantToCookFunc}
              ></RecipeListInner>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeList;
