import toggleIcon from "../assets/Images/hamburger.png";
import youtubeLogo from "../assets/Images/YouTube-logo.png";
import searchIcon from "../assets/Images/magnifying-glass.png";

function Header() {
  return (
    <header className="w-[100%] flex justify-center">
      <nav className="w-[96%] h-[60px] bg-[#2d] flex justify-between">
        <div className="flex justify-center items-center sm:gap-5">
          <div className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] rounded-full hover:bg-[#E5E5E5] hover:cursor-pointer flex items-center justify-center">
            <img
              src={toggleIcon}
              alt="toggle-Icon"
            
              className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img src={youtubeLogo} alt="Logo" className="md:w-[90px] md:h-[50px] w-[60px] h-[40px]"/>
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="lg:w-[600px] md:w-[400px] sm:w-[300px] w-[130px] sm:h-[40px] h-[25px] rounded-s-full px-5 border-[0.5px] border-gray-400 focus:outline-blue-600 text-sm sm:text-base"
            placeholder="Search"
          />
          <div className="rounded-e-full sm:w-[60px] w-[30px] sm:h-[40px] h-[25px] flex items-center sm:pl-4 pl-1 border-[1px] border-gray-400 border-l-0 hover:cursor-pointer hover:bg-[#E5E5E5]">
            <img src={searchIcon} alt="SearchIcon" className="md:w-[25px] md:h-[20px] w-[15px] h-[10px]"/>
          </div>
        </div>
        <div className="flex items-center">
            {/* className="rounded-full py-2 px-4 bg-[#E5E5E5] hover:bg-slate-300" */}
          <button className="sm:p-2 p-1 bg-[#E5E5E5] hover:bg-slate-300 rounded-md text-xs sm:text-base">Signin</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
