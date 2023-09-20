import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import redux from "../assets/redux.png";
import mongo from "../assets/mongo.svg";
import typescript from "../assets/typescript.png";
import sass from "../assets/sass.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },

    {
      id: 5,
      src: reactImage,
      title: "ReactJS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "NextJS",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-400",
    },

    {
      id: 10,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-lime-300",
    },
    {
      id: 11,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div id="skills" className="bg-gradient-to-r  from-blue-900 to-black">
      <div className="overflow-visible max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-slate-400">
        <div>
          <p className="text-4xl text-blue-500 font-bold border-b-4 border-green-500 p-2 inline">
            <br />
            Skills
          </p>
        </div>

        <div className="text-white w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
