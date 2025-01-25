import profileIcon from "../assets/Images/profile-icon.png";
const Comment = () => {
  return (
    <div className="flex gap-2">
      <div className="w-[40px]">
        <img
          src={profileIcon}
          alt=""
          className="w-[40px] h-[35px] rounded-full"
        />
      </div>
      <div className="w-[95%] flex flex-col gap-1 justify-end">
        <div className="font-semibold text-sm">Sateesh kumar goud</div>
        <div className="text-sm">Description</div>
      </div>
    </div>
  );
};

export default Comment;
