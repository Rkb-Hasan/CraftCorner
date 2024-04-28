import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyArt from "../MyArt/MyArt";

const MyArts = () => {
  const [myArts, setMyArts] = useState([]);
  // const [custom, setCustom] = useState(myArts);
  // const [yesNo, setYesNo] = useState("");
  // console.log(myArts);
  const { user } = useContext(AuthContext);

  // console.log(yesNo);

  const { email } = user;
  // console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/craft/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArts(data);
        // console.log(data);
      });
  }, [email, myArts]);

  // const handleYesNo = (ipt) => {
  //   setYesNo(ipt);
  //   const filtered = myArts.filter((art) => art.customization == yesNo);
  //   setCustom(filtered);
  // };
  // console.log(custom);
  return (
    <div>
      <div className="flex">
        <h3 className="text-4xl font-bold text-center flex-1">
          My Art & Craft{" "}
        </h3>
        <details className="dropdown ms-auto">
          <summary className="m-1 btn text-lg font-bold">Customization</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="font-semibold">
              <a>yes</a>
            </li>
            <li className="font-semibold">
              <a>no</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 my-10">
        {myArts.map((myArt) => (
          <MyArt key={myArt._id} myArt={myArt}></MyArt>
        ))}
      </div>
    </div>
  );
};

export default MyArts;
