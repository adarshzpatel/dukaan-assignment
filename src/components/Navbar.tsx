import ArrowDownFilledIcon from "../assets/icons/ArrowDownFilledIcon";
import ChatIcon from "../assets/icons/ChatIcon";
import InfoIcon from "../assets/icons/InfoIcon";
import SearchIcon from "../assets/icons/SearchIcon";

const Navbar = () => {
  return (
    <nav className="h-16 flex border-b  border-[#D9D9D9] bg-white px-8  items-center justify-between">
      <p className="flex">
        Payments
        <span className="text-xs pl-4 text-gray-500 flex gap-1.5 items-center ">
          <InfoIcon />
          How it works
        </span>
      </p>
      <div className="relative">
        <SearchIcon className='absolute h-4 w-4 left-4 top-2.5 '/>
        <input
          type="text"
          placeholder="Search by features, tutorials, etc.  "
          className="bg-[#F2F2F2] flex items-center  rounded-md gap-2 pl-10 pr-4 py-2 placeholder:text-black/50 text-sm w-[400px] focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-400" 
        />
      </div>
      <div className="flex gap-3">
        <button className="h-10 w-10 bg-[#E6E6E6] rounded-full grid place-items-center">
          <ChatIcon />
        </button>
        <button className="h-10 w-10 bg-[#E6E6E6] rounded-full grid place-items-center">
          <ArrowDownFilledIcon />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
