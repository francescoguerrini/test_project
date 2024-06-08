import React from "react";
import { FiArrowRight } from "react-icons/fi";

const SupportBanner = () => {
  return (
    <div className="bg-[#F4F1DE] py-[32px] px-[16px] flex flex-col gap-[16px]">
      <h2 className="text-[24px] font-[700] lead-[32px]">
        Il tuo supporto è fondamentale
      </h2>
      <div className="flex gap-[4px] items-center font-[700] text-[14px]">
        <a>Dai il tuo contributo</a>
        <FiArrowRight className="text-[20px]" />
      </div>
    </div>
  );
};

export default SupportBanner;
