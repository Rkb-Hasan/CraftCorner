import { useEffect, useState } from "react";

// import { useLoaderData } from "react-router-dom";
import SubCategory from "./SubCategory";

const ArtCraftCategories = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-eight-opal.vercel.app/subCategories")
      .then((res) => res.json())
      .then((data) => {
        setSubCategories(data);
      });
  }, []);
  console.log(subCategories);
  return (
    <div>
      <h3 className="lg:text-4xl md:text-3xl text-2xl  font-bold text-center ">
        Art & Craft Categories
      </h3>
      <div className="divider"></div>

      <h3 className="lg:text-xl md:text-lg  font-bold text-center ">
        Click a Category to see details.
      </h3>

      <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 my-10">
        {subCategories.slice(0, 6).map((category) => (
          <SubCategory key={category._id} category={category}></SubCategory>
        ))}
      </div>
    </div>
  );
};

export default ArtCraftCategories;
