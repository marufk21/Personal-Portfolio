import React from "react";
import { ReactTyped } from "react-typed";
import man from "../assets/dev.svg";
import "./Home.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },
  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {
  return (
    <section
      className="home-container bg-gradient-to-r from-blue-900 to-black"
      id="home"
      name="home"
    >
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-purple-800 text-transparent bg-clip-text mb-3">
          <div className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 text-transparent bg-clip-text text-3xl">
            <ReactTyped
              strings={["Welcomes you", "Hi I am Maruf Khan"]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
          </div>
          I'm a Full-Stack Developer
        </h2>

        <button
          type="button"
          className="text-blue-900 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-3xl text-sm px-5 py-2.5 mr-2 mb-3 w-44 my-6"
        >
          <a
            href="https://drive.google.com/drive/folders/1SYKXDHFdwqV2zSI1_TcN5j3dZzdgPNA-?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </button>

        <p class="text-[#3b82f6] text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-green-500 to-purple-800 bg-clip-text mt-2 mb-4">
          Connect Me Now
        </p>

        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/marufk21"
          >
            <AiOutlineGithub className="text-4xl rounded bg-blue-500" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/marufk21/"
          >
            <AiOutlineLinkedin className="text-4xl rounded bg-blue-500" />
          </a>
          <a href="mailto:marufkhan2002@gmail.com">
            <AiOutlineMail className="text-4xl rounded bg-blue-500" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
