const RecipeListInner = ({ list, index, wantToCookFunc }) => {
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
                onClick={() => wantToCookFunc(list)}
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
