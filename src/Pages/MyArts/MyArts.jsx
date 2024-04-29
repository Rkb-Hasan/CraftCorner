import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyArt from "../MyArt/MyArt";

const MyArts = () => {
  const [myArts, setMyArts] = useState([]);
  const [filteredArts, setFilteredArts] = useState([]);

  const { user } = useContext(AuthContext);

  const { email } = user;

  useEffect(() => {
    fetch(`http://localhost:5000/craft/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArts(data);
        // console.log(data);
      });
  }, [email]);

  useEffect(() => {
    setFilteredArts(myArts);
  }, [myArts]);

  // const handleYesNo = (ipt) => {
  //   setYesNo(ipt);
  //   const filtered = myArts.filter((art) => art.customization == yesNo);
  //   setCustom(filtered);
  // };
  // console.log(custom);

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
      <div className="flex">
        <h3 className="text-4xl font-bold text-center flex-1">
          My Art & Craft{" "}
        </h3>
        <details className="dropdown ms-auto">
          <summary className="m-1 btn text-lg font-bold">Customization</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={handleYes} className="font-semibold">
              <a>yes</a>
            </li>
            <li onClick={handleNo} className="font-semibold">
              <a>no</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 my-10">
        {filteredArts.map((myArt) => (
          <MyArt key={myArt._id} myArt={myArt}></MyArt>
        ))}
      </div>
    </div>
  );
};

export default MyArts;
