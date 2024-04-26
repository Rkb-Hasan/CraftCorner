import { useLoaderData } from "react-router-dom";
import Craft from "../Craft/Craft";

const Crafts = () => {
  const crafts = useLoaderData();

  return (
    <div>
      <h3>Craft Items </h3>
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 my-10">
        {crafts.map((craft) => (
          <Craft key={craft._id} craft={craft}></Craft>
        ))}
      </div>
    </div>
  );
};

export default Crafts;
