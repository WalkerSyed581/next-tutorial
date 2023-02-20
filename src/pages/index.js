import Head from "next/head";
import ArticleList from "@/components/ArticleList";
import { server } from "../../config";
import Meta from "@/components/Meta";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming, news" />
      </Head>
      <Meta />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  console.log(server);
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
