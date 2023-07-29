export const Button = ({ text }) => {
  return (
    <button className="hover:bg-[#4cbe1f] cursor-pointer bg-[#00A0B1] text-white rounded-sm font-medium py-4 px-8 text-center">
      {text}
    </button>
  );
};
