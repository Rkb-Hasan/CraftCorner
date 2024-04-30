import { Link } from "react-router-dom";
import "./sub.css";
const SubCategory = ({ category }) => {
  console.log(category);
  const { _id, image, subCategoryName, shortDescription } = category;
  return (
    <Link
      to={`/subDetails/${subCategoryName}`}
      className="card  shadow-xl image-full opacity-100"
    >
      <figure>
        <img src={image} alt="subCategory" />
      </figure>
      <div className="flex flex-col justify-center items-center border rounded-2xl px-6 ">
        <div className="border rounded-2xl p-2 space-y-2 bg-white bg-opacity-30 ">
          <h2 className="font-bold text-center lg:text-3xl md:text-2xl  text-xl  text-[#0d0b21] text-opacity-100 ">
            {subCategoryName}
          </h2>
          <p className="md:text-lg text-center  font-semibold text-[#370f0f]">
            {shortDescription.slice(0, 80)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SubCategory;
