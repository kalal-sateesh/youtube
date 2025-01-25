import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/Images/profile-icon.png";

const ChannelCreate = () => {
  const sidebar = useSelector((state) => state.navbar.sidebar);

  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div
      className={`absolute top-[100px] ${
        sidebar
          ? `sm:w-[400px] w-[210px] left-[37%]`
          : `sm:w-[400px] w-[250px] sm:left-[33%] left-[22%]`
      } h-auto bg-[#FFFFFF] rounded-md p-6 flex flex-col gap-3 shadow-xl`}
    >
      <div className="sm:text-2xl text-sm font-bold">
        How you&apos;ll appear
      </div>
      <div className="py-2 flex items-center flex-col gap-1">
        <img
          src={profileIcon}
          alt="prifile-icon"
          className="w-[80px] h-[70px] rounded-full"
        />
        <div className="font-semibold cursor-pointer text-blue-500">
          Select picture
        </div>
      </div>
      <form action="" className="flex flex-col gap-3">
        <div className="flex gap-2 flex-col">
          <label htmlFor="text" className="text-gray-700 font-semibold text-sm">
            Name
          </label>
          <input
            type="text"
            id="text"
            placeholder=""
            value="Sateesh"
            className="h-[50px] px-3 bg-[#F9FAFB] focus:outline-blue-400 outline-gray-300 rounded-md border-[1px] border-gray-300"
            required
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label
            htmlFor="password"
            className="text-gray-700 font-semibold text-sm"
          >
            Handle
          </label>
          <input
            type="email"
            id="email"
            placeholder=""
            value="Sateesh@123"
            className="h-[50px] px-3 bg-[#F9FAFB] focus:outline-blue-400 outline-gray-300 rounded-md border-[1px] border-gray-300"
            required
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-[#2563EB] text-white w-[100%] h-[50px] rounded-lg hover:bg-[#1A56DB]"
          >
            Create channel
          </button>
        </div>
        <div className="">
          <button
            type="cancel"
            className="bg-gray-100 text-gray-600 w-[100%] h-[50px] rounded-lg hover:bg-[#cbd5eb]"
            onClick={handleNavigateToHome}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChannelCreate;
