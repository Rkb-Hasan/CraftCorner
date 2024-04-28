// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const UpdateCraft = () => {
  //   const { user } = useContext(AuthContext);
  //   const { email } = user;

  const craft = useLoaderData();
  const {
    _id,
    name,
    price,
    subCategoryName,
    customization,
    rating,
    image,
    processingTime,
    shortDescription,
    stockStatus,
  } = craft;
  console.log(craft);
  const handleUpdateCraft = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const subCategoryName = form.subCategoryName.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const processingTime = form.processingTime.value;
    const customization = form.customization.value;
    const shortDescription = form.shortDescription.value;
    const stockStatus = form.stockStatus.value;
    // https://i.ibb.co/1RM7C7J/7-01-1024x683.jpg

    const updatedCraft = {
      name,
      price,
      subCategoryName,
      customization,
      rating,
      image,
      processingTime,
      shortDescription,
      stockStatus,
    };

    fetch(`http://localhost:5000/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h3 className="text-4xl  font-bold  text-center">Update Craft</h3>
      <div className="divider"></div>
      <form
        onSubmit={handleUpdateCraft}
        className="border rounded-2xl mx-auto lg:p-10 p-5 "
      >
        <div className="grid lg:grid-cols-2 lg:gap-20 mb-4">
          <div className="space-y-4">
            <div className="space-y-3">
              <label htmlFor="name" className="lg:text-xl text-lg font-bold ">
                Item Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Item name.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="price" className="lg:text-xl text-lg font-bold ">
                Price
              </label>
              <br />
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="subCategoryName"
                className="lg:text-xl text-lg font-bold "
              >
                Sub Category Name
              </label>
              <br />
              <input
                type="text"
                name="subCategoryName"
                defaultValue={subCategoryName}
                placeholder=" Sub category Name.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="shortDescription"
                className="lg:text-xl text-lg font-bold "
              >
                Short Description
              </label>
              <br />
              <input
                type="text"
                name="shortDescription"
                defaultValue={shortDescription}
                placeholder=" Short Description.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="rating" className="lg:text-xl text-lg font-bold ">
                Rating
              </label>
              <br />
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Rating.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-3">
              <label
                htmlFor="customization"
                className="lg:text-xl text-lg font-bold "
              >
                Customization
              </label>
              <br />

              <select
                name="customization"
                className="lg:p-4 p-2  rounded-lg w-full lg:text-lg"
              >
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            <div className="space-y-3">
              <label htmlFor="image" className="lg:text-xl text-lg font-bold ">
                Image
              </label>
              <br />
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Image_URL.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="processingTime"
                className="lg:text-xl text-lg font-bold "
              >
                Processing Time
              </label>
              <br />
              <input
                type="text"
                name="processingTime"
                defaultValue={processingTime}
                placeholder="Processing Time.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="stockStatus "
                className="lg:text-xl text-lg font-bold "
              >
                Stock Status
              </label>
              <br />

              <select
                name="stockStatus"
                className="lg:p-4 p-2  rounded-lg w-full lg:text-lg"
              >
                <option value="- In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className="w-full btn font-bold text-lg"
        />
      </form>
    </div>
  );
};

export default UpdateCraft;
