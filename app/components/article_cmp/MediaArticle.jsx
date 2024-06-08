import React from "react";
import ArticleDetails from "./ArticleDetails";
import getArticleData from "../../utils/getArticleData";
import Image from "next/image";

const MediaArticle = (props) => {
  const data = getArticleData(props.article);
  const url = data.url;
  return (
    <div className="flex flex-col border-b border-black">
      {data.file === "video" && (
        <div className="pt-[24px] px-[16px]">
          <div
            className="h-[201px] w-full py-[24px] px-[16px] bg-cover bg-center"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </div>
      )}
      <ArticleDetails textWhite={false} article={props.article} />
    </div>
  );
};

export default MediaArticle;
