import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const OurPartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("/partners.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPartners(data);
      });
  }, []);

  return (
    <div>
      <div>
        {" "}
        <h3 className="lg:text-4xl text-2xl text-center font-bold">
          Our Partners
        </h3>{" "}
        <div className="divider"></div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className=" border-2 bg-gray-300 p-8 rounded-2xl"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-full rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
