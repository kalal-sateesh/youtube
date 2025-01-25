import { useSelector } from "react-redux";
import VideoplayerLeft from "./VideoplayerLeft";
import VideoplayerRight from "./VideoplayerRight";

const Videoplayer = () => {
  const sidebar = useSelector((state) => state.navbar.sidebar);
  return (
    <div
      className={`${
        sidebar ? `w-[80%] sm:left-64 left-32` : `w-[90%] sm:left-24 left-14`
      } absolute top-[60px] md:flex md:flex-row flex-col gap-2`}
    >
      <VideoplayerLeft />
      <VideoplayerRight />
    </div>
  );
};

export default Videoplayer;
