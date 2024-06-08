import { articles, authors } from "../mockdata/datas";

const getArticleDetails = (id) => {
  const details = {};
  const article = articles.find((article) => article.id === id);
  if (article) {
    const author = authors.find(
      (author) => author.id === parseInt(article.author_id)
    );
    details.id = article.id;
    details.tag = article.tag_text;
    details.title = article.title;
    details.date = article.article_date;
    details.file = article.file;
    details.url = article.media;
    if (author) {
      details.authorName = author.name;
      details.profileImage = author.image;
    } else {
      details.authorName = null;
      details.profileImage = null;
    }
  }
  return details || null;
};

export default getArticleDetails;
