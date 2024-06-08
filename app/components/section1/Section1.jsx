import MainArticle from "../article_cmp/MainArticle";
import MediaArticle from "../article_cmp/MediaArticle";
import SupportBanner from "../article_cmp/SupportBanner";

const Section1 = () => {
  return (
    <section id="1">
      <div className="h-[320px] lg:h-[506px]">
        <MainArticle article={1} />
      </div>
      <div>
        <MediaArticle article={2} />
      </div>
      <div>
        <MediaArticle article={3} />
      </div>
      <div>
        <MediaArticle article={4} />
      </div>
      <div>
        <SupportBanner />
      </div>
      <div>
        <MediaArticle article={5} />
      </div>
      <div>
        <MediaArticle article={6} />
      </div>
      <div>
        <MediaArticle article={7} />
      </div>
      <div>
        <MediaArticle article={8} />
      </div>
    </section>
  );
};

export default Section1;
