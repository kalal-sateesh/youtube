import { useSelector } from "react-redux";
import video1 from "../assets/Videos/video1.mp4";
import { useNavigate } from "react-router-dom";

const ChannelVideoCard = () => {
  const sidebar = useSelector((state) => state.navbar.sidebar);
  const navigate = useNavigate();

  const handleNavigateToVideoplayer = () => {
    navigate("/video/1");
  };
  return (
    <div
      className={`${
        sidebar
          ? `sm:w-[250px] sm:h-[200px] w-[230px]`
          : `sm:w-[280px] sm:h-[250px] w-[250px]`
      } rounded-lg overflow-hidden cursor-pointer`}
      onClick={handleNavigateToVideoplayer}
    >
      <div className="w-[100%] h-[65%]">
        <video
          /*  src={`https://www.youtube.com/embed/L8s6qxQJKgk`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen */
          className="w-[100%] h-[100%] object-cover"
          controls
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className="w-[100%] h-[35%] text-sm flex flex-col gap-1">
        <div className="w-[100%] mt-1 h-[65%] overflow-hidden font-semibold">
          V movie 4k quality V movie 4k quality V movie 4k quality V movie 4k
          quality
        </div>
        <div className="w-[100%] h-[35%] text-gray-600">
          399k views • 1hr ago
        </div>
      </div>
    </div>
  );
};

export default ChannelVideoCard;
