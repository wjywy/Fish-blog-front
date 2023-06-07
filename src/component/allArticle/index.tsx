import "./index.scss";
import Introduce from "@/component/introduce";
import { Fragment } from "react";
import { articleType } from "@/types";

const App: React.FC<{
  list: articleType[];
}> = (props) => {
  const list = props.list;
  console.log(list);
  return (
    <>
      <div className='article_list'>
        {list.map((item: articleType, index: number) => {
          return (
            <Fragment key={`${index}${item.createTime}`}>
              <Introduce
                // title={item.introduce.title}
                createTime={String(item.createTime).slice(0, 10)}
                description={item.description}
                id={String(item.id)}
                types={item.types}
                title={item.title}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default App;
