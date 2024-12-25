import toggleIcon from "../assets/Images/hamburger.png";
import youtubeLogo from "../assets/Images/YouTube-logo.png";
import searchIcon from "../assets/Images/magnifying-glass.png";
import Sidemenu from "./Sidemenu";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { togglenavbar } from "./HeaderSlice";

function Header() {
  // const [sidebar, setSidebar] = useState(true);

  const sidebar = useSelector((state) => state.navbar.sidebar);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(togglenavbar());
  };

  return (
    <>
      {/*  Header */}
      <header className="w-[100%] flex justify-center fixed top-0 bg-[#FFFFFF] z-10">
        <nav className="w-[97%] h-[60px] bg-[#FFFFFF] flex justify-between">
          <div className="flex justify-center items-center sm:gap-5">
            <div
              className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] rounded-full hover:bg-[#E5E5E5] hover:cursor-pointer flex items-center justify-center"
              onClick={handleToggleSidebar}
            >
              <img
                src={toggleIcon}
                alt="toggle-Icon"
                className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
              />
            </div>
            <div className="hover:cursor-pointer">
              <img
                src={youtubeLogo}
                alt="Logo"
                className="md:w-[90px] md:h-[50px] w-[60px] h-[40px]"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="lg:w-[600px] md:w-[400px] sm:w-[300px] w-[130px] sm:h-[40px] h-[25px] rounded-s-full px-5 border-[0.5px] border-gray-400 focus:outline-blue-600 text-sm sm:text-base"
              placeholder="Search"
            />
            <div className="rounded-e-full sm:w-[60px] w-[30px] sm:h-[40px] h-[25px] flex items-center sm:pl-4 pl-2 border-[1px] border-gray-400 border-l-0 hover:cursor-pointer hover:bg-[#E5E5E5]">
              <img
                src={searchIcon}
                alt="SearchIcon"
                className="sm:w-[20px] sm:h-[20px] w-[10px] h-[10px]"
              />
            </div>
          </div>
          <div className="flex items-center">
            {/* className="rounded-full py-2 px-4 bg-[#E5E5E5] hover:bg-slate-300" */}
            <button className="sm:px-3 sm:py-2 px-1 py-1 bg-[#FFFFFF] hover:bg-[#DEF1FF] rounded-full text-xs sm:text-sm text-blue-600 font-semibold border-[1px] border-gray-400">
              Sign in
            </button>
          </div>
        </nav>
      </header>
      {/*  Header */}

      {/* Sidebar */}
      {sidebar ? <Sidemenu /> : <Sidebar />}
      {/* Sidebar */}
    </>
  );
}

export default Header;
