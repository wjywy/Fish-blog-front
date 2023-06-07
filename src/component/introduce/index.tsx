/**
 * 最近更新文章的简介
 */
import { useEffect, useState } from "react";
import "./index.scss";
import { useRouter } from "next/navigation";
import { introduce } from "@/types";

const App: React.FC<introduce> = (props) => {
  const router = useRouter();
  const [showArti, setShowArti] = useState<introduce>({
    title: "",
    createTime: "",
    description: "",
    types: "",
    id: "",
  });
  useEffect(() => {
    setShowArti(props);
  }, []);
  const toDetail = (id: string) => {
    router.push(`/detail/${id}`);
  };
  return (
    <>
      <div className='article_total'>
        <div className='article_title' onClick={() => toDetail(showArti.id)}>
          {showArti.title}
        </div>
        <div className='article_time'>{showArti.createTime}</div>
        <div className='article_intro'>{showArti.description}</div>
        <div className='article_reading'>阅读全文</div>
        <span className='article_type_div'>{showArti.types}</span>
      </div>
    </>
  );
};
export default App;
