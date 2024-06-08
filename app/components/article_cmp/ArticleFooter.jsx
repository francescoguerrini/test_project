import React from "react";
import Image from "next/image";
import { authors } from "../../mockdata/datas";

const ArticleFooter = (props) => {
  return (
    <div className="flex gap-4">
      <Image
        src="/authors/1.jpeg"
        alt="alt"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center">
        <div className="font-[400] text-[14px]">Di {props.author}</div>
        <div className="text-[10px]">{props.published}</div>
      </div>
    </div>
  );
};

export default ArticleFooter;
