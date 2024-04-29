import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubDetail from "./SubDetail/SubDetail";
import { Helmet } from "react-helmet";

const SubDetails = () => {
  // const [subArts,setSubArts] = useState([])

  //     useEffect(() => {
  //       fetch(`https://assignment-10-server-eight-opal.vercel.app/craft/${email}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setSubArts(data);
  //         });
  //     }, []);
  const subDetails = useLoaderData();
  const { subCategoryName } = useParams();
  console.log(subDetails);
  // console.log(subCategoryName);

  return (
    <div>
      <Helmet>
        <title>Sub Details</title>
      </Helmet>
      <h3 className="lg:text-4xl text-2xl font-bold text-center ">
        {subCategoryName}
      </h3>
      <div className="divider"></div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {subDetails.map((subDetail) => (
          <SubDetail key={subDetail._id} subDetail={subDetail}></SubDetail>
        ))}
      </div>
    </div>
  );
};

export default SubDetails;
