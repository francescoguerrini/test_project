import React from "react";
import InnerItem from "./InnerItem";

const Item1 = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-full relative"
      style={{ backgroundImage: `url(/articles/article${1}.jpeg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <InnerItem />
      </div>
    </div>
  );
};

export default Item1;
