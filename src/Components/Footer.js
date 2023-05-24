import React from "react";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="z-0 mt-auto text-gray-600 body-font bg-gradient-to-r from-blue-900 to-black">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-sm font-bold text-blue-500">
            Developed with love by Maruf Khan
          </span>
        </div>
        <p className="sm:hidden text-sm text-blue-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-bold">
          You can find me on
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="_blank"
            href="https://github.com/marufk21"
            rel="noreferrer"
            className="ml-3 text-blue-500"
          >
            {" "}
            <RiGithubFill className="text-xl " />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marufk21/"
            rel="noreferrer"
            className="ml-3 text-blue-500"
          >
            <RiLinkedinBoxFill className="text-xl " />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/marufique/"
            rel="noreferrer"
            className="ml-3 text-blue-500 "
          >
            <RiInstagramFill className="text-xl " />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
