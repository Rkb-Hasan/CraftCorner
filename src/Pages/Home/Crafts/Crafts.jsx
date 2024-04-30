import { useLoaderData } from "react-router-dom";
import Craft from "../Craft/Craft";

const Crafts = () => {
  const crafts = useLoaderData();

  return (
    <div>
      <div className="lg:mt-10 mt-4">
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">
          Craft Items{" "}
        </h3>
        <div className="divider"></div>
        <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 my-10">
          {crafts.slice(0, 6).map((craft) => (
            <Craft key={craft._id} craft={craft}></Craft>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crafts;
