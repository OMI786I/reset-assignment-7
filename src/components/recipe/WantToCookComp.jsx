import WantToCookInner from "./WantToCookInner";

const WantToCookComp = ({ wantToCook }) => {
  let index = 1;
  return (
    <div>
      <div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">
            Currently Cooking : {wantToCook.length}
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
            <tbody>
              {wantToCook.map((list) => (
                <WantToCookInner
                  key={list.recipe_id}
                  list={list}
                  index={index++}
                ></WantToCookInner>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WantToCookComp;
