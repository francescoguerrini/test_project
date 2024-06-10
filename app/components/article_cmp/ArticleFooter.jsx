import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const ArticleFooter = (props) => {
  return (
    <div className={`flex gap-4 ${props.main ? "" : "lg:flex-col"} `}>
      <Image
        src="/authors/1.jpeg"
        alt="alt"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center gap-[8px]">
        <div className="font-[400] text-[14px]">Di {props.author}</div>
        <div className="text-[10px]">{props.published}</div>
        {!props.main && (
          <FiArrowRight className="hidden lg:flex lg:text-[24px] lg:mt-4" />
        )}
      </div>
    </div>
  );
};

export default ArticleFooter;
