import React from "react";
import HeroImage from "../assets/heroImage.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-5/6">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <div className="text-white text-3xl mb-3 ">
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
            I'm a Full Stack Developer
          </h2>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 w-40 my-6 "
          >
            About Me
          </button>
          <div className="py-4 flex space-x-4 justify-start">
            <a href="https://www.linkedin.com/feed/?trk=nav_logo">
              {" "}
              <AiOutlineLinkedin className="text-4xl rounded bg-gray-300" />
            </a>
            <a href="https://github.com/marufk21">
              {" "}
              <AiOutlineGithub className="text-4xl rounded  bg-gray-300" />
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-30 max-h-96 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
