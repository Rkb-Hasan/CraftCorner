import { useEffect, useState } from "react";

// import { useLoaderData } from "react-router-dom";
import SubCategory from "./SubCategory";

const ArtCraftCategories = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/subCategories")
      .then((res) => res.json())
      .then((data) => {
        setSubCategories(data);
      });
  }, []);
  console.log(subCategories);
  return (
    <div>
      <h3 className="text-4xl  font-bold text-center ">
        Art & Craft Categories : {subCategories.length}
      </h3>
      <div className="divider"></div>

      <div className="flex items-center justify-center gap-4">
        <label
          htmlFor="customization"
          className="lg:text-xl text-lg font-bold  "
        >
          Select a Category to see more :
        </label>

        <select name="customization" className=" p-2  rounded-lg  lg:text-lg">
          <option value="yes">Landscape Painting</option>
          <option value="no">Portrait Drawing</option>
          <option value="no">Watercolour Painting</option>
          <option value="no">Oil Painting</option>
          <option value="no">Charcoal Sketching</option>
          <option value="no">Cartoon Drawing</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 my-10">
        {subCategories.slice(0, 6).map((category) => (
          <SubCategory key={category._id} category={category}></SubCategory>
        ))}
      </div>
    </div>
  );
};

export default ArtCraftCategories;
