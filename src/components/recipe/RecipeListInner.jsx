const RecipeListInner = ({ list, index, wantToCookFunc }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = list;

  return (
    <tr>
      <th>{index}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>

      <button
        className="btn btn-accent btn-xs"
        onClick={() => {
          wantToCookFunc(list, recipe_id);
        }}
      >
        Preparing
      </button>
    </tr>
  );
};

export default RecipeListInner;
