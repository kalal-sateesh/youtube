import profileIcon from "../assets/Images/profile-icon.png";
import tickIcon from "../assets/Images/checked2.png";
import { useSelector } from "react-redux";
const VideoCard = () => {

    const sidebar = useSelector((state) => state.navbar.sidebar);

  return (
    <div className={`${sidebar ? `sm:w-[348px] sm:h-[300px] w-[250px]`:`sm:w-[394px] sm:h-[350px] w-[285px]`} rounded-lg overflow-hidden cursor-pointer`}>
      <div className="w-[100%] h-[65%]">
        <iframe
          src={`https://www.youtube.com/embed/TkStyS992bc`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[100%] h-[100%]"
        ></iframe>
      </div>
      <div className="w-[100%] h-[35%] flex">
        <div className="w-[15%] h-[100%]">
          <img
            src={profileIcon}
            alt="channel-icon"
            className="w-[40px] h-[35px] mt-3"
          />
        </div>
        <div className="w-[85%] h-[100%]">
          <div className="w-[100%] h-[45%] mt-3 overflow-hidden font-semibold">
            V movie 4k quality   V movie 4k quality   V movie 4k quality   V movie 4k quality
          </div>
          <div className="w-[100%] h-[20%] text-gray-600 flex gap-2 items-center">
            <div>Sateesh</div>
            <div>
              <img
                src={tickIcon}
                alt="Righttick-icon"
                className="w-[15px] h-[15px]"
              />
            </div>
          </div>
          <div className="w-[100%] h-[20%] text-gray-600">399k views&apos; 1hr ago</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
