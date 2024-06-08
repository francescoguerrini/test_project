import { FiSearch, FiMenu, FiUser } from "react-icons/fi";
import SearchInput from "./SearchInput";
import Temi from "./Temi";

const Navbar = () => {
  return (
    <div className="mt-10 lg:mt-0 flex flex-col">
      <div className="flex border-t border-b border-black lg:border-none">
        <div className="p-1 lg:pl-6 w-1/2 lg:w-auto flex items-center justify-center lg:justify-start border-r  border-black lg:border-none">
          Constibuisci
        </div>
        <div className="p-1 w-1/2 lg:w-auto lg:flex-grow flex items-center justify-center lg:justify-start">
          Abbonati
        </div>
        <div className="hidden lg:flex lg:items-center">
          <FiUser /> <span className="px-4">Accedi</span>
        </div>
      </div>
      <div className="flex justify-around text-red-600 border-t border-slate-700">
        <div className="p-4 font-bold text-xl">
          <FiMenu />
        </div>
        <div className="lg:flex-grow">
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
