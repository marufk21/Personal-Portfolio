import React from "react";
import HeroImage from "../assets/heroImage.png";
import Typewriter from "typewriter-effect";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

const Home = () => {
  
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-r from-blue-900 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row">
        <div className="flex flex-col justify-center h-2/3"> {/* Updated height */}
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
            I'm a Full-Stack Developer
          </h2>
          <button
            type="button"
            className="text-blue-900  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-3 w-44 my-6"
          >
            <a
              href="https://drive.google.com/drive/folders/1SYKXDHFdwqV2zSI1_TcN5j3dZzdgPNA-?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Download Resume
            </a>
          </button>
  
          <p className="mt-4 text-xl sm:text-xl font-semibold bg-gradient-to-r from-blue-500 via-green-500 to-purple-800 text-transparent bg-clip-text">
            Connect Me Now
          </p>
          <div className="py-4 flex space-x-4 justify-start">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/marufk21"
            >
              {" "}
              <AiOutlineGithub className="text-4xl rounded  bg-blue-500" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/marufk21/"
            >
              {" "}
              <AiOutlineLinkedin className="text-4xl rounded bg-blue-500" />
            </a>
            <a href="mailto:marufkhan2002@gmail.com"> {/* Added "mailto:" */}
              {" "}
              <AiOutlineMail className="text-4xl rounded  bg-blue-500" />
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="hidden rounded-2xl mx-auto w-30 max-h-96 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
