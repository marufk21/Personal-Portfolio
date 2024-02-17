import { BsFillPhoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const Pinfo = () => {
  return (
    <>
      <div className="mb-8 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-12 my-1">
        <div className="bg-gradient-to-r from-blue-900 to-black sm:p-4 rounded-2xl flex items-center">
          <span className="text-green-400 font-semibold">
            <BsFillPhoneFill />
          </span>
          <span className="ml-1 text-blue-400 font-medium">+91 8171244560</span>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-black sm:p-4 rounded-3xl flex items-center">
          <span className="text-green-400 font-semibold">
            <SiGmail />
          </span>
          <span className="ml-1 text-blue-400 font-medium">
              marufkhan2002@gmail.com
         </span>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-black sm:p-4 rounded-3xl flex items-center">
          <span className="text-green-400 font-semibold">
            <MdLocationOn />
          </span>
          <span className="ml-1 text-blue-400 font-medium">Noida, IN</span>
        </div>
      </div>
    </>
  );
};

export default Pinfo;
