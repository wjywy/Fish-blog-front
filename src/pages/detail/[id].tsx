import { GetStaticPaths, GetStaticProps } from "next";
import SideBar from "@/component/sideBar";
import AllArticle from "@/component/all";
import "./index.scss";
import { articleType } from "../../types/index";

const App: React.FC<{
  post: {
    info: articleType;
  };
}> = ({ post }) => {
  let data: string = post.info.content;
  return (
    <>
      <div className='histroy_flex'>
        <SideBar />
        <AllArticle article={data} />
      </div>
    </>
  );
};
export default App;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:8000/article/info?id=${params!.id}`
  );
  const results = await res.json();
  const post = results.data;
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (): Promise<{
  paths: any;
  fallback: boolean;
}> => {
  const res = await fetch("http://localhost:8000/article/list");
  const results = await res.json();
  const posts: articleType[] = results.data;
  const paths = posts.map((post: articleType) => {
    return {
      params: { id: String(post.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
