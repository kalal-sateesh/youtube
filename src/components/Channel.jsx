import { useSelector } from "react-redux";
import coverImage from "../assets/Images/coverImage.jpg";
import grayRightTick from "../assets/Images/grayRightTick.png";
import ChannelVideoCard from "./ChannelVideoCard";

const Channel = () => {
  const sidebar = useSelector((state) => state.navbar.sidebar);

  return (
    <div
      className={`${
        sidebar ? `w-[80%] sm:left-64 left-32` : `w-[90%] sm:left-24 left-14`
      } absolute top-[60px] flex flex-col gap-4 pb-3`}
    >
      <div className="">
        <img
          src={coverImage}
          alt="cover-image"
          className="w-full rounded-lg h-[200px] object-cover"
        />
      </div>

      <div className="flex md:flex-row flex-col gap-2">
        <div className="">
          <img
            src={coverImage}
            alt="profile-icon"
            className="lg:w-[150px] lg:h-[150px] md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold flex gap-1 items-center">
            <div>T-Series Tel </div>
            <img
              src={grayRightTick}
              alt="gray-right-tick icon"
              className="w-[15px] h-[15px] rounded-full"
            />
          </div>
          <div className="text-sm">
            <span className=""> @TseriesTelugu</span>
            <span className="text-gray-600">
              {" "}
              • 12.2M subscribers • 7.6K videos
            </span>
          </div>
          <div className="text-gray-600 text-xs lg:text-sm">
            &quot;Music can change the world&quot; T-Series is India&apos;s No.1
            Music Label, believes in bringing world{" "}
            <span className="text-black cursor-pointer font-bold">...more</span>
          </div>
          <div className="text-sm">
            <span className="text-blue-500 cursor-pointer">
              youtu.be/HioGuWy8DW0
            </span>{" "}
            and 12 more links
          </div>
          <div className="">
            <button className="bg-black text-white rounded-full px-5 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 pb-2 pl-1 border-b-[1px] border-gray-300 text-gray-500 font-semibold">
        <div className="hover:cursor-pointer">Home</div>
        <div className="hover:cursor-pointer text-black">Videos</div>
        <div className="hover:cursor-pointer">Shorts</div>
        <div className="hover:cursor-pointer">Live</div>
        <div className="hover:cursor-pointer">Podcast</div>
        <div className="hover:cursor-pointer">Playlist</div>
        <div className="hover:cursor-pointer">Community</div>
      </div>

      <div className="flex flex-wrap gap-4">
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
        <ChannelVideoCard />
      </div>
    </div>
  );
};

export default Channel;
