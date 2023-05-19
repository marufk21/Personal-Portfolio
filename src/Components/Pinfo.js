import React from "react";

const Pinfo = () => {
  return (
    <>
      <div className="w-auto flex justify-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12 my-6">
        <div className="flex items-center bg-gradient-to-r from-blue-900 to-black  p-4 rounded-3xl">
          <span className="text-green-400 font-semibold">Phone Number:</span>
          <span className="ml-1 text-blue-400 font-medium">+918171244560</span>
        </div>

        <div className="flex items-center bg-gradient-to-r from-blue-900 to-black p-4 rounded-3xl">
          <span className="text-green-400 font-semibold">Gmail ID:</span>
          <span className="ml-1  text-blue-400 font-medium">
            marufkhan2002@gmail.com
          </span>
        </div>

        <div className="flex items-center bg-gradient-to-r from-blue-900 to-black p-4 rounded-3xl">
          <span className="text-green-400 font-semibold">Address: </span>
          <span className=" ml-1 text-blue-400 font-medium">
            Pilkhuwa,UttarPradesh
          </span>
        </div>
      </div>
    </>
  );
};

export default Pinfo;
