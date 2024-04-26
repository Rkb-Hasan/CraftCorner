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
        className="border w-1/2 mx-auto p-3 space-y-4"
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-lg font-bold ">
            Item Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Item name.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="price" className="text-lg font-bold ">
            Price
          </label>
          <br />
          <input
            type="text"
            name="price"
            placeholder="Price.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subCategoryName" className="text-lg font-bold ">
            Sub Category Name
          </label>
          <br />
          <input
            type="text"
            name="subCategoryName"
            placeholder=" Sub category Name.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="shortDescription" className="text-lg font-bold ">
            Short Description
          </label>
          <br />
          <input
            type="text"
            name="shortDescription"
            placeholder=" Short Description.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="rating" className="text-lg font-bold ">
            Rating
          </label>
          <br />
          <input
            type="text"
            name="rating"
            placeholder="Rating.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="customization" className="text-lg font-bold ">
            Customization
          </label>
          <br />
          <input
            type="text"
            name="customization"
            placeholder="Customization"
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="image" className="text-lg font-bold ">
            Image
          </label>
          <br />
          <input
            type="text"
            name="image"
            placeholder="Image_URL.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="processingTime" className="text-lg font-bold ">
            Processing Time
          </label>
          <br />
          <input
            type="text"
            name="processingTime"
            placeholder="Processing Time.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="stockStatus " className="text-lg font-bold ">
            Stock Status
          </label>
          <br />
          <input
            type="text"
            name="stockStatus"
            placeholder="Stock Status.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="userEmail " className="text-lg font-bold ">
            User Email
          </label>
          <br />
          <input
            type="email"
            name="userEmail"
            placeholder="User Email.."
            className="p-3 w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="userName " className="text-lg font-bold ">
            User Name
          </label>
          <br />
          <input
            type="text"
            name="userName"
            placeholder="User Name.."
            className="p-3 w-full"
          />
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
