import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyArt from "../MyArt/MyArt";
import { Helmet } from "react-helmet";

const MyArts = () => {
  const [myArts, setMyArts] = useState([]);
  const [filteredArts, setFilteredArts] = useState([]);

  const { user } = useContext(AuthContext);

  const { email } = user;

  useEffect(() => {
    fetch(`https://assignment-10-server-eight-opal.vercel.app/craft/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArts(data);
        // console.log(data);
      });
  }, [email]);

  useEffect(() => {
    setFilteredArts(myArts);
  }, [myArts]);

  const handleYes = () => {
    const filtered = myArts.filter((myArt) => myArt.customization == "yes");
    setFilteredArts(filtered);
  };
  const handleNo = () => {
    const filtered = myArts.filter((myArt) => myArt.customization == "no");
    setFilteredArts(filtered);
  };

  return (
    <div>
      <Helmet>
        <title>My Arts</title>
      </Helmet>
      <div className="flex">
        <h3 className="text-4xl font-bold text-center flex-1">
          My Art & Craft{" "}
        </h3>
        <details className="dropdown  ms-auto">
          <summary className="m-1 btn btn-primary text-lg font-bold">
            Customization
          </summary>
          <ul className="p-2 shadow menu dropdown-content bg-green-700  z-[1]  rounded-box w-52">
            <li onClick={handleYes} className="font-bold text-lg  border-b-2">
              <a>yes</a>
            </li>
            <li onClick={handleNo} className="font-bold text-lg">
              <a>no</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 my-10">
        {filteredArts.map((myArt) => (
          <MyArt
            key={myArt._id}
            myArt={myArt}
            filteredArts={filteredArts}
            setFilteredArts={setFilteredArts}
          ></MyArt>
        ))}
      </div>
    </div>
  );
};

export default MyArts;
