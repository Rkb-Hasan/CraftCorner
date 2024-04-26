import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
const AllCraft = () => {
  const allCrafts = useLoaderData();
  return (
    <div>
      <h3>All : {allCrafts.length}</h3>

      <div className="overflow-x-auto">
        <table className="table text-base">
          {/* head */}
          <thead>
            <tr className="lg:text-xl text-lg">
              <th>Name & Ratings</th>
              <th>Subcategory Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allCrafts.map((craft) => (
              <tr key={craft._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={craft.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold lg:text-lg ">{craft.name}</div>
                      <div className=" flex gap-1  items-center">
                        {craft.rating}{" "}
                        <FaStar className="text-md text-orange-400" />{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{craft.subCategoryName}</td>
                <td>{craft.price}</td>
                <th>
                  <Link to={`/craft/${craft._id}`}>
                    <button className="btn btn-primary font-bold ">
                      View Details
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
