import React from "react";
import ArticleDetails from "./ArticleDetails";

const MainArticle = (props) => {
  return (
    <div
      className="bg-cover bg-center w-full h-full relative "
      style={{ backgroundImage: `url(/articles/article${1}.jpeg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute inset-0 flex items-end justify-end py-[24px] px-[16px]">
        <ArticleDetails textWhite={true} article={props.article} />
      </div>
    </div>
  );
};

export default MainArticle;
