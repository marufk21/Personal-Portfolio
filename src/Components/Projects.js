import ecommerce from "../assets/ecommerce.png";
import notes from "../assets/notes.png";
import portfolio from "../assets/portfolio.png";

const ProjectSection = () => {
  const portfolios = [
    {
      id: 1,
      title: "ElectriKart",
      src: ecommerce,
      live: "https://electrikart.netlify.app",
      code: "https://github.com/marufk21/ElectriKart",
    },
    {
      id: 2,
      title: "QuickNote",
      src: notes,
      live: "",
      code: "https://github.com/marufk21/QuickNote",
    },
    {
      id: 3,
      title: "Profolio",
      src: portfolio,
      live: "https://marufkhan.netlify.app",
      code: "https://github.com/marufk21/Profolio",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-gradient-to-r from-blue-900 to-black"
    >
      <div className="overflow-y-auto max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-500 font-bold inline border-b-4 border-green-500">
            Projects
          </p>
        </div>

        <div className="overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-4">
          {portfolios.map(({ id, title, src, live, code }) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-[320px] h-[250px]"
              />
              <div className="">
                <h3 className="flex pt-3 justify-center text-purple-500 text-xl font-bold">
                  {title}
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-white font-semibold text-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </button>
                <button className="text-white font-semibold text-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="text-blue-900 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-3xl text-sm px-5 py-3 text-center mr-2 mb-3 w-40 my-6 "
          >
            <a
              href="https://github.com/marufk21?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              For More Projects
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
