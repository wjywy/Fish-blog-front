import { GetStaticPaths, GetStaticProps } from "next";
import SideBar from "@/component/sideBar";
import AllArticle from "@/component/all";
import { articleType } from "../../types/index";
import "./index.scss";

// const BASEURL = "https://blog.soundheart.cn/api/";
const BASEURL = "http://localhost:8000/api/";

const App: React.FC<{
  post: {
    info: articleType;
  };
}> = ({ post }) => {
  let data: string = post.info.content;
  const enterGithub = () => {
    window.location.href = "https://github.com/wjywy?tab=repositories";
  };
  return (
    <>
      <div className='histroy_flex'>
        <SideBar />
        <AllArticle article={data} />
      </div>
      <div className='bottomInfo'>
        <div className='talk'>#一起聊聊</div>
        <div className='flex'>
          <div className='about'>
            如发现文章有错误、对内容有疑问，都可以关注博主的github，在对应文章下给我留言。
          </div>
          <div className='enter' onClick={enterGithub}>
            enter
          </div>
        </div>
      </div>
    </>
  );
};
export default App;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${BASEURL}article/info?id=${params!.id}`);
  const results = await res.json();
  const post = results.data;
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async (): Promise<{
  paths: any;
  fallback: boolean;
}> => {
  const res = await fetch(`${BASEURL}article/list`);
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
