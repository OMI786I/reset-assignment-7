const WantToCookInner = ({ list, index }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = list;
  return (
    <tr>
      <th>{index}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
    </tr>
  );
};

export default WantToCookInner;
