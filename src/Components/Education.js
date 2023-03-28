import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full bg-gradient-to-r from-blue-900 to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-500 font-bold inline border-b-4 border-green-500">
            Education
          </p>
        </div>
        <div className="">
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-purple-500 leading-relaxed md:leading-normal lg:leading-relaxed md:text-center lg:text-left">
            Bachelor of Computer Applications
            <br />
            2020-2023
          </p>
        </div>
        <div className="flex ">
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-purple-500 leading-relaxed md:leading-normal lg:leading-relaxed md:text-center lg:text-left">
            Intermediate with (PCM)
            <br />
            2018-2020
          </p>
        </div>
      </div>
     </div>
  );
};

export default Education;
