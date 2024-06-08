import React from "react";
import ArticleFooter from "./ArticleFooter";
import getArticleData from "../../utils/getArticleData";

const ArticleDetails = (props) => {
  const data = getArticleData(props.article);
  console.log(data);
  const author = data.authorName;
  const published = data.date;
  return (
    <div
      className={`flex flex-col gap-[16px] items-start py-[24px] px-[16px] ${data.authorName === "Redazione" ? "bg-[#E63036] text-white" : ""} ${props.textWhite ? "text-white" : "text-black"}`}
    >
      <button className="tag-button">{data.tag}</button>
      {data.file === "audio" && (
        <img src={data.url} alt="audiowave" width={"100%"} height={"64px"} />
      )}
      <div className="anybody font-[700] max-w-[85%]">
        <span
          className={`${data.file === "video" ? "text-[20px] leading-[30px]" : "text-[14px] leading-[24px]"}`}
        >
          {data.title}
        </span>
      </div>
      <div>
        <ArticleFooter author={author} published={published} />
      </div>
    </div>
  );
};

export default ArticleDetails;
