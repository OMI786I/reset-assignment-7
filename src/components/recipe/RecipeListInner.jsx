const RecipeListInner = ({ list, index, wantToCookFunc, addToRecipeList }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = list;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <th>{index}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>

              <button
                className="btn btn-accent btn-xs md:btn-sm"
                onClick={() => {
                  wantToCookFunc(list, recipe_id);
                  addToRecipeList(recipe_id);
                }}
              >
                Preparing
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeListInner;
