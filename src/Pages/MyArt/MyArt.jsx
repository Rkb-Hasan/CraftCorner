import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArt = ({ myArt, setFilteredArts, filteredArts }) => {
  const { _id, name, price, customization, rating, image, stockStatus } = myArt;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-eight-opal.vercel.app/crafts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = filteredArts.filter((crft) => crft._id !== _id);
              setFilteredArts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card pb-2  bg-base-200 hover:shadow-xl">
      <Helmet>
        <title>My Art</title>
      </Helmet>
      <figure>
        <img src={image} alt={name} className=" lg:h-[280px]" />
      </figure>

      <div className="p-2 space-y-2">
        <div className="flex gap-1">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="font-bold text-sm">({stockStatus})</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-blue-500">
            <span className="font-bold ">Rating</span> :{" "}
            <span className=" text-yellow-500 font-semibold">{rating}</span>
          </p>{" "}
          |{" "}
          <p className="text-green-500">
            <span className="font-bold text-red-500">Price</span> :{" "}
            <span className="font-semibold">{price}</span>
          </p>{" "}
          |
          <p className="text-green-500">
            <span className="font-bold text-orange-500">Customization</span> :{" "}
            <span className="font-semibold">#{customization}</span>
          </p>{" "}
        </div>
        {/* <div>
          <p className="text-green-500">
            <span className="font-bold text-orange-500">Processing Time</span> :{" "}
            <span className="font-semibold">#{processingTime}</span>
          </p>{" "}
        </div> */}
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
          <Link to={`/updateCraft/${_id}`}>
            <button className=" btn w-full  bg-purple-500 font-bold text-lg ">
              Update
            </button>
          </Link>
          <Link to="">
            <button
              onClick={() => handleDelete(_id)}
              className=" btn w-full bg-red-500 font-bold text-lg "
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyArt;
