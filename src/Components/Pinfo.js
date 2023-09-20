import React from "react";


const Pinfo = () => {
  return (
    <>
     <div className="mb-8 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-12 my-1">
  <div className="bg-gradient-to-r from-blue-900 to-black sm:p-4 rounded-2xl flex items-center">
    <span className="text-green-400 font-semibold">Phone:</span>
    <span className="ml-1 text-blue-400 font-medium">+918171244560</span>
  </div>

  <div className="bg-gradient-to-r from-blue-900 to-black sm:p-4 rounded-3xl flex items-center">
    <span className="text-green-400 font-semibold">Gmail ID:</span>
    <span className="ml-1 text-blue-400 font-medium">
      marufkhan2002@gmail.com
    </span>
  </div>

  <div className="bg-gradient-to-r from-blue-900 to-black sm:p-4 rounded-3xl flex items-center">
    <span className="text-green-400 font-semibold">Address:</span>
    <span className="ml-1 text-blue-400 font-medium">
      Ghaziabad(245304), U.P. India
    </span>
  </div>
</div>

    </>
  );
};

export default Pinfo;
