const RecipeListInner = ({ list }) => {
  const { recipe_name, preparing_time, calories } = list;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <th>1</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeListInner;
