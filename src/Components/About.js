import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-r from-blue-900 to-black flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl text-blue-500 font-bold inline border-b-4 border-green-500">
            About
          </p>
        </div>

        <p className="text-xl text-purple-500">
          Hello! I'm Maruf Khan, a recent graduate in Computer Applications
          during my academic journey, I honed my skills in essential programming
          languages and popular web development frameworks and libraries. I
          excel in problem-solving by breaking down challenges, conducting
          through research, and my analytical skills. I analyze
          problems from different angles, utilizing my technical expertise to
          find effective solutions.
        </p>
        <p className="text-xl my-2 text-purple-500">
          I thrive on exploring emerging technologies and staying updated with
          the dynamic trends in the software development industry. I am
          enthusiastic about combining aesthetics with functionality in my web
          development projects.
        </p>
        <p className="text-xl my-2 text-purple-500">
          I actively seek opportunities to learn from experienced professionals
          and contribute to impactful projects. My goal is to create visually
          appealing websites that offer seamless user experiences, focusing on
          responsive design and accessibility. Apart from web development, I
          have a keen interest in user experience and strive to incorporate
          intuitive interfaces into my projects. I am constantly seeking ways to
          enhance my skills and stay up to date with industry best practices.
        </p>
      </div>
    
    </div>
  );
};

export default About;
