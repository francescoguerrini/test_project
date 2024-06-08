import { FiChevronDown } from "react-icons/fi";
import { temi } from "../../mockdata/datas";

const Temi = () => {
  return (
    <div className="flex flex-col gap-y-2 border-t border-black bg-[#F4F4F4] py-[24px] px-[16px]">
      <div className="main-title flex gap-[12px]">
        Tutti i temi
        <span className="flex items-center justify-center">
          <FiChevronDown />
        </span>{" "}
      </div>
      <div className="grid grid-cols-4 gap-[4px] gap-y-[12px]">
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
