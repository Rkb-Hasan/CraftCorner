import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { Helmet } from "react-helmet";
const AllCraft = () => {
  const allCrafts = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <Helmet>
          <title>AllCrafts</title>
        </Helmet>
        <h3 className="lg:text-4xl text-2xl text-center font-bold">
          All Art & craft Items
        </h3>
        <div className="divider"></div>
        <table className="table text-base text-black  bg-slate-400 dark:bg-orange-700">
          {/* head */}
          <thead className="text-black">
            <tr className="lg:text-xl md:text-lg text-xs">
              <th>Name & Ratings</th>
              <th>Subcategory Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allCrafts.map((craft) => (
              <tr key={craft._id}>
                <td className="md:px-4 md:py-4 p-1">
                  <div className="md:flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={craft.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold md:text-lg text-xs ">
                        {craft.name}
                      </div>
                      <div className=" flex gap-1 md:text-lg text-xs items-center">
                        {craft.rating}{" "}
                        <FaStar className="text-md text-orange-400" />{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" md:px-4 md:py-4 p-1 font-bold  lg:text-lg md:text-base text-xs">
                  {craft.subCategoryName}
                </td>
                <td className=" md:px-4 md:py-4 p-1 font-bold  lg:text-lg md:text-base text-xs">
                  {craft.price}
                </td>
                <th className=" font-bold  lg:text-lg  md:text-base text-xs md:px-4 md:py-4 p-1 ">
                  <Link to={`/craft/${craft._id}`}>
                    <button className="btn btn-md p-1 py-2 btn-primary font-bold ">
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
