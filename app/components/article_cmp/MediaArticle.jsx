import React from "react";
import ArticleDetails from "./ArticleDetails";
import getArticleData from "../../utils/getArticleData";

const MediaArticle = (props) => {
  const data = getArticleData(props.article);
  const media = data.url;
  const bgimage = data.bgimage;
  return (
    <>
      <div className="flex flex-col border-b border-black lg:hidden">
        {data.file === "video" && (
          <div className="pt-[24px] px-[16px] lg:hidden">
            <div
              className="h-[201px] w-full py-[24px] px-[16px] bg-cover bg-center"
              style={{ backgroundImage: `url(${media})` }}
            ></div>
          </div>
        )}
        <ArticleDetails textWhite={false} article={props.article} />
      </div>

      <div
        className="border-b border-black hidden lg:flex h-full"
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      >
        <ArticleDetails textWhite={true} article={props.article} />
      </div>
    </>
  );
};

export default MediaArticle;
