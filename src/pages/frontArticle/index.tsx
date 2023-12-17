import "./index.scss";
import SideBar from "@/component/sideBar";
import { GetStaticProps } from "next";
import Article from "@/component/allArticle";
import { articleType } from "@/types";

const BASEURL = "http://localhost:8000/api/";

const App: React.FC<{
  list: articleType[];
}> = (props) => {
  return (
    <>
      <div className='front_flex'>
        <SideBar />
        <div className={"front_title"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "2vw",
            }}
          >
            <div
              style={{ marginTop: "2vh", fontSize: "20px", color: "#999999" }}
            >
              前端专属
            </div>
            <div
              style={{
                width: "95%",
                height: "1px",
                backgroundColor: "#EEEEEE",
              }}
            ></div>
          </div>
          <Article list={props.list} />
        </div>
      </div>
    </>
  );
};
export default App;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const data = await fetch(`${BASEURL}article/frontList?type=前端`);
  const res = await data.json();
  return {
    props: {
      list: res.data,
    },
    revalidate: 60,
  };
};
