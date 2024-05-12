import WantToCookInner from "./WantToCookInner";

const WantToCookComp = ({ wantToCook }) => {
  let index = 1;
  return (
    <div>
      <div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">
            Want to cook : {wantToCook.length}
          </h1>
        </div>
        <hr></hr>
        <div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>{}</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
          </table>

          {wantToCook.map((list) => (
            <WantToCookInner
              key={list.recipe_id}
              list={list}
              index={index++}
            ></WantToCookInner>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WantToCookComp;
