import video1 from "../assets/Videos/video1.mp4";
const VideoplayerRightCard = () => {
  return (
    <div className="flex gap-1 cursor-pointer">
      <div className="w-[45%] h-[90px] rounded-lg overflow-hidden">
        <video
          /* src={`https://www.youtube.com/embed/L8s6qxQJKgk`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen */
          className="w-full h-full object-cover rounded-lg"
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className="w-[55%] h-[90px] flex flex-col gap-1">
        <div className="w-[100%] h-[50%] overflow-hidden text-sm font-semibold">
          Game Changer Trailer (Telugu) | Ram Charan | Kiara Advani | Shankar
        </div>
        <div className="w-[100%] h-[25%] overflow-hidden text-sm text-gray-600">
          Sateesh kumar goud
        </div>
        <div className="w-[100%] h-[25%] overflow-hidden text-sm text-gray-600">
          8.2M views &#8226; 4 days ago
        </div>
      </div>
    </div>
  );
};

export default VideoplayerRightCard;
