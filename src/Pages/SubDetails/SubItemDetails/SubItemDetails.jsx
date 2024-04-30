import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const SubItemDetails = () => {
  const subItem = useLoaderData();

  const {
    item_name,
    price,

    rating,
    image,
    processingTime,
    shortDescription,
  } = subItem;

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
          <title>SubDetails</title>
        </Helmet>

        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content">
          <div className="border lg:p-5 p-2 rounded-2xl bg-slate-400 bg-opacity-5 hover:bg-opacity-15 duration-300 hover:scale-110 md:my-8 md:mx-0 lg:m-0 m-5 ">
            <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
              {item_name}
            </h1>
            <p className="lg:mb-5 mb-3">{shortDescription}</p>
            <p className="font-bold md:text-base text-sm">
              Processed Time of this beautiful work is {processingTime}{" "}
            </p>

            <p className="font-bold md:text-base text-sm flex justify-center items-center">
              <span> Users Rating of this work is - {rating} </span>
              <FaStar className="text-sm text-orange-400" />{" "}
            </p>

            <p className="font-bold md:text-base text-sm">
              Available only at- {price}
            </p>

            <div className="flex justify-center items-center gap-2">
              <span className="md:text-base text-sm">
                See more products of Us?
              </span>
              <Link to="/">
                <button className="btn btn-sm btn-primary">See More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubItemDetails;
