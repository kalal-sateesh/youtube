import { useSelector } from "react-redux";

const Home = () => {

  const sidebar = useSelector((state) => state.navbar.sidebar);

  return (
    
    <>
    <div className={`${sidebar ? `w-[80%] sm:left-[250px] left-[120px]`:`w-[90%] sm:left-[100px] left-[70px]`} h-[80px] overflow-x-auto flex items-center mt-[60px] absolute p-3`}>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">All</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">Live</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">Music</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">GameShows</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">LiveTelevision</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">WebSeries</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">National</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">International</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">Javascript</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">ScienceFiction</div>
      <div className="px-3 py-2 rounded-lg bg-[#F2F2F2] cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]">Movie</div>
    </div>
    </>
  )
}

export default Home