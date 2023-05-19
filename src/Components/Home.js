import React from "react";
import HeroImage from "../assets/heroImage.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-r from-blue-900 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-5/6">
          <h2 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-purple-800 text-transparent bg-clip-text">
            <div className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 text-transparent bg-clip-text text-3xl mb-3 ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcomes you")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Hi I am Maruf Khan")
                    .start();
                }}
              />
            </div>
            I'm a Software Developer
          </h2>

          <div className="py-4 flex space-x-4 justify-start">
            <a
              target="_blank"
              href="https://www.linkedin.com/feed/?trk=nav_logo"
            >
              {" "}
              <AiOutlineLinkedin className="text-4xl rounded bg-blue-500" />
            </a>
            <a target="_blank" href="https://github.com/marufk21">
              {" "}
              <AiOutlineGithub className="text-4xl rounded  bg-blue-500" />
            </a>
          </div>
          <button
            type="button"
            className="text-blue-900  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 w-44 my-6 "
          >
            Download Resume
          </button>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-30 max-h-96 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
