import { FiChevronDown } from "react-icons/fi";
import { temi } from "../../mockdata/datas";

const Temi = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-2 border-t border-black bg-[#F4F4F4] py-[24px] px-[16px] lg:py-[40px] lg:px-[64px]">
      <div className="anybody main-title flex gap-[12px] lg:w-1/2 lg:text-[51px] ">
        Tutti i temi
        <span className="flex items-center justify-center lg:hidden">
          <FiChevronDown />
        </span>{" "}
      </div>
      <div className="grid grid-cols-4 gap-[4px] gap-y-[12px] lg:w-1/2 lg:flex lg:justify-evenly ">
        {temi.map((tema, index) => (
          <div key={index} className="argument-button">
            <span className="argument-text">{tema}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temi;
