/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FilterButtons = ({ category, index, clickedIndex, setClickedIndex }) => {
  // const sidebar = useSelector((state) => state.navbar.sidebar);

  const navigate = useNavigate();
  /* const handleNavigateToHome = () => {
    navigate("/", { state: { category } });
    setClickedIndex(clickedIndex === index ? null : index);
  }; */

  const handleNavigateToHome = () => {
    if (clickedIndex === index) {
      // Clicking the same filter removes filter (show all videos)
      navigate("/", { state: null });
      setClickedIndex(null);
    } else {
      // Apply filter
      navigate("/", { state: { category } });
      setClickedIndex(index);
    }
  };

  return (
    <div
      className={`${
        clickedIndex === index ? `bg-gray-700 text-white` : `bg-[#F2F2F2]`
      } px-3 py-2 rounded-lg cursor-pointer font-semibold text-sm mr-3 hover:bg-[#E5E5E5]`}
      onClick={handleNavigateToHome}
    >
      {category}
    </div>
  );
};

export default FilterButtons;
