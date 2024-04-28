import { Link } from "react-router-dom";

const SubDetail = ({ subDetail }) => {
  const {
    _id,
    item_name,
    price,
    subCategoryName,
    rating,
    image,
    processingTime,
    shortDescription,
  } = subDetail;

  return (
    <div className="card pb-2  bg-base-200 hover:shadow-xl">
      <figure>
        <img src={image} alt={item_name} className="h-[480px] w-full" />
      </figure>

      <div className="p-2 space-y-2">
        <h2 className="card-title font-bold">{item_name}</h2>
        <p className="text-lg">{shortDescription}</p>
        <div className="flex items-center  gap-2">
          <p className="text-blue-500">
            <span className="font-bold ">Sub-Category</span> :{" "}
            <span className=" text-yellow-500 font-semibold">
              {subCategoryName}
            </span>
          </p>{" "}
          |
          <p className="text-blue-500">
            <span className="font-bold ">Rating</span> :{" "}
            <span className=" text-yellow-500 font-semibold">{rating}</span>
          </p>{" "}
        </div>
        <div className="flex items-center  gap-2">
          <p className="text-green-500">
            <span className="font-bold text-red-500">Price</span> :{" "}
            <span className="font-semibold">{price}</span>
          </p>{" "}
          |
          <p className="text-green-500">
            <span className="font-bold text-orange-500">Processing Time</span> :{" "}
            <span className="font-semibold">#{processingTime}</span>
          </p>{" "}
        </div>

        {/* <div>
            <p className="flex gap-2 items-center text-xs font-bold">
              <span className="text-base"> Facilities : </span>
              <span className="bg-green-500 bg-opacity-10 p-1 rounded-lg">
                #{}
              </span>
              <span className="bg-red-500 bg-opacity-10 p-1 rounded-lg">#{}</span>
              <span className="bg-yellow-500 bg-opacity-10 p-1 rounded-lg">
                #{}
              </span>
            </p>
          </div> */}
        <div>
          <Link to={`/subCategoryDetail/${_id}`}>
            <button className=" btn w-full bg-green-500 font-bold text-lg ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubDetail;
