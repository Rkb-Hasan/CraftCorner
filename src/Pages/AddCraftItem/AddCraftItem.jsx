import Swal from "sweetalert2";

const AddCraftItem = () => {
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
    fetch("http://localhost:5000/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "User added",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div>
      <h3 className="text-4xl  font-bold  text-center">Add Craft</h3>
      <div className="divider"></div>
      <form
        onSubmit={handleAddCraft}
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
                placeholder=" Short Description.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
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
                placeholder="User Email.."
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
              {/* <input
                type="text"
                name="customization"
                placeholder="Customization"
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              /> */}
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
              {/* <input
                type="text"
                name="stockStatus"
                placeholder="Stock Status.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              /> */}

              <select
                name="stockStatus"
                className="lg:p-4 p-2  rounded-lg w-full lg:text-lg"
              >
                <option value="- In stock">In stock</option>
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
                placeholder="User Name.."
                className="lg:p-4 p-2 rounded-lg w-full lg:text-lg"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Add"
          className="w-full btn font-bold text-lg"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
