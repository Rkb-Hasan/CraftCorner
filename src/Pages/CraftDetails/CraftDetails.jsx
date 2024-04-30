import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { Helmet } from "react-helmet";
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
    <div className=" lg:min-h-screen flex flex-col justify-center items-center">
      <div
        className="hero lg:min-h-screen p-2"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "centre",
          backgroundSize: "cover",
        }}
      >
        <Helmet>
          <title>Details</title>
        </Helmet>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content">
          <div className="border lg:p-5 p-2 rounded-2xl bg-slate-400 bg-opacity-5 hover:bg-opacity-15 duration-300 hover:scale-110 md:my-8 md:mx-0 lg:m-0 m-5 ">
            <h1 className="mb-5 lg:text-5xl md:text-3xl text-xl font-bold">
              {name}{" "}
              <span className="text-sm font-semibold">({stockStatus})</span>
            </h1>
            <p className="lg:mb-5 mb-3">{shortDescription}</p>
            <div className="flex flex-col items-start justify-center">
              <p className="font-semibold md:text-base text-sm">
                Processed Time of this beautiful work is : {processingTime}{" "}
              </p>

              <p className="font-semibold md:text-base text-sm flex justify-center items-center">
                <span> Users Rating of this work is : {rating} </span>
                <FaStar className="text-sm text-orange-400" />{" "}
              </p>
              <p className="font-semibold md:text-base text-sm">
                Can Customize? : "{customization}"
              </p>
              <p className="font-semibold md:text-base text-sm">
                Available only at : {price}
              </p>
              <p className="font-semibold md:text-base text-sm">
                This Product is added by : {userName}
              </p>
              <p className="font-semibold md:text-base text-sm">
                Email address: {userEmail}
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className=" md:text-base text-sm ">
                <span>
                  See more products of{" "}
                  <span className="font-semibold">{subCategoryName}</span>{" "}
                  category?
                </span>
                <Link to={`/subDetails/${subCategoryName}`}>
                  <button className="btn btn-sm btn-primary">See More</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
