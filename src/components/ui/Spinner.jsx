import React from "react";
import { CircleLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-20">
      <CircleLoader color="#244D3F" size={100} width={9} />
    </div>
  );
};

export default Spinner;
