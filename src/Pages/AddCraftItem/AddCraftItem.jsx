import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;
  const navigate = useNavigate();
  const { reset } = useForm();

  //
  const handleAddCraft = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const subCategoryName = form.subCategoryName.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const processingTime = form.processingTime.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const customization = form.customization.value;
    const shortDescription = form.shortDescription.value;
    const stockStatus = form.stockStatus.value;
    // https://i.ibb.co/1RM7C7J/7-01-1024x683.jpg

    const newCraft = {
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
    };
    console.log(newCraft);

    // send to server
    fetch("https://assignment-10-server-eight-opal.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          Swal.fire({
            title: "Success!",
            text: "Item added",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/");
        }
        reset();
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Craft</title>
      </Helmet>
      <h3 className="lg:text-4xl text-2xl font-bold  text-center">Add Craft</h3>
      <div className="divider"></div>
      <form
        onSubmit={handleAddCraft}
        className="border-2 rounded-2xl mx-auto lg:p-10 p-5 "
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
                required
                placeholder="Item name.."
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
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
                required
                placeholder="Price.."
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
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
              <select
                name="subCategoryName"
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
                required
              >
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
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
                required
                placeholder=" Short Description.."
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="userEmail "
                className="lg:text-xl text-lg font-bold "
              >
                User Email
              </label>
              <br />
              <input
                type="email"
                name="userEmail"
                required
                placeholder="User Email.."
                value={email}
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
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
                required
                placeholder="Rating.."
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
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
                className=" border-2 focus:ring lg:p-4 p-2  rounded-lg w-full lg:text-lg"
                required
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
                required
                placeholder="Image_URL.."
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
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
                required
                placeholder="Processing Time.."
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
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
              {/* <input
                type="text"
                name="stockStatus"
                 required
                placeholder="Stock Status.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              /> */}

              <select
                name="stockStatus"
                className=" border-2 focus:ring lg:p-4 p-2  rounded-lg w-full lg:text-lg"
                required
              >
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="userName "
                className="lg:text-xl text-lg font-bold "
              >
                User Name
              </label>
              <br />
              <input
                type="text"
                name="userName"
                value={displayName}
                required
                placeholder="User Name.."
                className=" border-2 focus:ring lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Add"
          className="w-full btn btn-primary font-bold text-lg"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
