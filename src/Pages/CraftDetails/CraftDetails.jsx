import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
const CraftDetails = () => {
  const craft = useLoaderData();

  const {
    name,
    price,
    subCategoryName,
    customization,
    rating,
    image,
    processingTime,
    userEmail,
    userName,
    shortDescription,
    stockStatus,
  } = craft;
  //   console.log(craft);
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-center text-neutral-content">
        <div className="border p-5 rounded-2xl bg-slate-400 bg-opacity-5 hover:bg-opacity-15 duration-300 hover:scale-110">
          <h1 className="mb-5 text-5xl font-bold">
            {name} <span className="text-base font-bold">({stockStatus})</span>
          </h1>
          <p className="mb-5">{shortDescription}</p>
          <p className="font-bold">
            Processed Time of this beautiful work is {processingTime}{" "}
          </p>

          <p className="font-bold flex justify-center items-center">
            <span> Users Rating of this work is - {rating} </span>
            <FaStar className="text-sm text-orange-400" />{" "}
          </p>
          <p className="font-bold">Can Customize? : "{customization}"</p>
          <p className="font-bold">Available at only - {price}</p>
          <div className="flex justify-center items-center gap-2">
            <span>See more products of {subCategoryName} category?</span>
            <Link to="/">
              <button className="btn btn-sm btn-primary">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
