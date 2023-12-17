import "./index.scss";
import { useRouter } from "next/router";
import { useState } from "react";

const App: React.FC = () => {
  const router = useRouter();
  let data = [
    {
      value: "Fish的博客",
      router: "",
    },
    {
      value: "最新文章",
      router: "",
    },
    {
      value: "前端专属",
      router: "frontArticle",
    },
    {
      value: "编辑文章",
      router: "edit",
    },
    {
      value: "关于博主",
      router: "author",
    },
  ];
  const toShow = (value: string, route: string) => {
    window.localStorage.setItem("sidebarName", value);
    router.push(`/${route}`);
  };
  const judgeShow = () => {
    return (
      <>
        <div style={{ width: "10%" }}>
          <div className='home_tab'>
            {data.map((item, index) => {
              return (
                <>
                  <div
                    className={
                      index === 0 ? "home_tab_author" : "home_tab_title"
                    }
                    onClick={() => toShow(item.value, item.router)}
                  >
                    {item.value}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return <>{judgeShow()}</>;
};

export default App;
