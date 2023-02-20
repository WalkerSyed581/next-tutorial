import articleStyles from "@/styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link
      key={article.id}
      className={articleStyles.card}
      href="/article/[id]"
      as={`/article/${article.id}`}
    >
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
