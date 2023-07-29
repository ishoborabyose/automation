import { FaPlay } from "react-icons/fa";

export const ActionButton = ({ style }) => {
  return (
    <button
      className={`rounded-full animate-ripple relative top-16 bg-white p-3 w-16 h-16 items-center justify-center flex ${style}`}
    >
      <FaPlay className="text-[#009fb2] w-5 h-5" />
    </button>
  );
};
