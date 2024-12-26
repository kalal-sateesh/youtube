import { useSelector } from "react-redux";
import FilterButtons from "./filterButtons";
import VideoCard from "./VideoCard";


const Home = () => {

  const sidebar = useSelector((state) => state.navbar.sidebar);
  return (
    <>
      <FilterButtons />
      <div className={`${
        sidebar
          ? `w-[80%] sm:left-[250px] left-[120px]`
          : `w-[90%] sm:left-[100px] left-[70px]`
      } flex gap-4 justify-center absolute flex-wrap top-36`}>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/>
      </div>
    </>
  );
};

export default Home;
