import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As A Highly Driven And Ambitious College Student, I Am Constantly
          Seeking Opportunities To Expand My Knowledge And Skills In The Field
          Of Software Development. With A Strong Foundation In Programming
          Languages And A Deep Understanding Of Software Engineering Principles,
          I Am Equipped To Tackle Complex Coding Challenges And Create
          Innovative Solutions. My Passion For Technology, Coupled With My
          Dedication To Continuous Learning And Growth, Makes Me A Valuable
          Asset To Any Team In The Software Development Industry.
        </p>
      </div>
    </div>
  );
};

export default About;
