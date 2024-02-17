import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact me",
    },
  ];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const renderNavLinks = () => {
    return links.map(({ id, link }) => (
      <li
        key={id}
        className="px-4 cursor-pointer capitalize font-bold text-blue-600 hover:scale-105 hover:text-purple-600 duration-200"
        onClick={closeNav}
      >
        <Link to={link} smooth duration={500}>
          {link}
        </Link>
      </li>
    ));
  };

  return (
    <nav className="flex justify-between items-center z-10 w-full h-20 px-4 bg-gradient-to-r from-blue-900 to-black ">
      <div>
        <h1 className="text-4xl font-bold ml-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 text-transparent bg-clip-text">
        &lt; Maruf /&gt;
        </h1>
      </div>

      <ul className={`hidden md:flex ${navOpen ? "" : "hidden"}`}>
        {renderNavLinks()}
      </ul>
    </nav>
  );
};

export default Navbar;
