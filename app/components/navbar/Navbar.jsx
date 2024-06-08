import { FiSearch, FiMenu } from "react-icons/fi";
import SearchInput from "./SearchInput";
import Temi from "./Temi";

const Navbar = () => {
  return (
    <div className="mt-10 flex flex-col">
      <div className="flex border-t border-b border-black">
        <div className="p-1 w-1/2 flex items-center justify-center border-r border-black">
          Constibuisci
        </div>
        <div className="p-1 w-1/2 flex items-center justify-center">
          Abbonati
        </div>
      </div>
      <div className="flex justify-around text-red-600 border-t border-slate-700">
        <div className="p-4 font-bold text-xl">
          <FiMenu />
        </div>
        <div className="">
          <SearchInput />
        </div>
        <div className="p-4 font-bold text-xl">
          <FiSearch />
        </div>
      </div>
      <div>
        <Temi />
      </div>
    </div>
  );
};

export default Navbar;
