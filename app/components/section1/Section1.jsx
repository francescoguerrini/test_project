import MainArticle from "../article_cmp/MainArticle";
import MediaArticle from "../article_cmp/MediaArticle";
import SupportBanner from "../article_cmp/SupportBanner";

const Section1 = () => {
  return (
    <>
      <section id="1">
        <div className="flex-flex-col">
          <div className="h-[320px] lg:h-[506px]">
            <MainArticle article={1} />
          </div>
          <div className="flex flex-col lg:flex-row lg:h-[845px]">
            <MediaArticle article={2} />
            <div className="flex flex-col h-full">
              <div className="lg:h-[471px]">
                <MediaArticle article={3} />
              </div>
              <div className="lg:h-[374px]">
                <MediaArticle article={4} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <SupportBanner />
        </div>
      </section>
      <section id="2" className="lg:grid lg:grid-cols-3">
        <div>
          <MediaArticle article={5} />
        </div>
        <div>
          <MediaArticle article={6} />
        </div>
        <div>
          <MediaArticle article={7} />
        </div>
      </section>

      {/* <div>
        <MediaArticle article={8} />
      </div> */}
    </>
  );
};

export default Section1;
