const WantToCookInner = ({ list }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = list;
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <th>{}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WantToCookInner;
