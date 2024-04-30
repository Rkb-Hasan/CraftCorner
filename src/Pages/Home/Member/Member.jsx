const Member = () => {
  return (
    <div className="my-8">
      <h3 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold">
        Be An Admin
      </h3>{" "}
      <div className="divider"></div>
      <section className="lg:p-6 p-3 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid lg:gap-6 gap-4 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full lg:px-6 px-3 lg:py-16 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
            <h1 className="lg:text-3xl text-xl font-extrabold dark:text-gray-900">
              Build with Us
            </h1>
            <div className="divider"></div>

            <p className="lg:my-8 md:my-6 my-2">
              <span className="font-medium md:text-lg text-base dark:text-gray-900">
                Make versatile Arts And Crafts alongside us. Make Your skill
                more powerful and productive. <br />
                <br />
                <span className="md:text-2xl text-lg font-bold">
                  Together We can make a better Chance.{" "}
                </span>
              </span>
            </p>
            <form noValidate="" action="" className="self-stretch space-y-3">
              <div>
                <label htmlFor="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md p-2 border focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Email address"
                  className="w-full  p-2 border rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <button
                type="button"
                className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Join Admin Panel
              </button>
            </form>
          </div>
          <img
            src="https://i.ibb.co/cQvKQvH/acrylic-painting.webp"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Member;
