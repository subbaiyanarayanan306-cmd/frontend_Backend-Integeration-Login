import React from "react";

const Fail = () => {
  return (
    <div className="bg-black p-10 ">
      <div className="bg-[#EFEFEF] p-10 rounded flex flex-col justify-center text-center gap-5">
        <h1 className="text-red-600 text-2xl font-medium">LOGIN FAILED</h1>
        <p className="text-2xl font-medium">Kindley Pl check Your Email and Password </p>
      </div>
    </div>
  );
};

export default Fail;
