import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Landscape = () => {
  // const [subArts,setSubArts] = useState([])

  //     useEffect(() => {
  //       fetch(`http://localhost:5000/craft/${email}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setSubArts(data);
  //         });
  //     }, []);
  const landscape = useLoaderData();

  return (
    <div>
      <h3>landscape : {landscape.length}</h3>
    </div>
  );
};

export default Landscape;
