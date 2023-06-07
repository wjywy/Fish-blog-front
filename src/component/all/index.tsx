import "./index.scss";
import fm from "front-matter";
import { remark } from "remark";
import { useEffect, useState } from "react";
import remarkhtml from "remark-html";

const App: React.FC<any> = (props) => {
  const [html, setHtml] = useState<string>("");
  const data = props.article;
  useEffect(() => {
    let matter = fm(data);
    remark()
      .use(remarkhtml)
      .process(matter.body)
      .then((res) => {
        setHtml(`${res.value}`);
      });
  }, []);
  return (
    <>
      <div className={"all_article"}>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
};
export default App;
