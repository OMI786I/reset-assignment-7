import WantToCookInner from "./WantToCookInner";

const WantToCookComp = ({ wantToCook }) => {
  return (
    <div>
      <div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Want to cook :</h1>
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
          </table>

          {wantToCook.map((list) => (
            <WantToCookInner key={list.recipe_id} list={list}></WantToCookInner>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WantToCookComp;
