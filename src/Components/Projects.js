import ecommerce from "../assets/ecommerce.png";
import notes from "../assets/notes.png";
import portfolio from "../assets/f1ext.png";

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
      live: "https://myquicknotes.netlify.app",
      code: "https://github.com/marufk21/QuickNote",
    },
    {
      id: 3,
      title: "F1-Racing Extension",
      src: portfolio,
      live: "https://github.com/marufk21/F1-Racing-Extension",
      code: "https://github.com/marufk21/F1-Racing-Extension",
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
        <div className="overflow-visible grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-4">
          {portfolios.map(({ id, title, src, live, code }) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-lg p-4">
              <img
                src={src}
                alt={title}
                className="hover:scale-105 duration-500 py-2 rounded-lg w-full sm:w-[320px] md:w-[280px] lg:w-[360px] h-auto"
              />
              <h3 className="mt-3 text-center text-purple-700 text-xl font-semibold">
                {title}
              </h3>
              <br />
              <div className="flex items-center justify-center space-x-4">
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-full transition-transform transform hover:scale-105"
                >
                  Live
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold text-lg rounded-full transition-transform transform hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="text-blue-900 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-3xl text-sm px-5 py-3 text-center mr-2 w-40 my-6 "
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
