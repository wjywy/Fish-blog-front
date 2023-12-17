/**
 * 最近更新文章的简介
 */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import axios from "axios";
import { introduce } from "@/types";
import "./index.scss";

const App: React.FC<introduce> = (props) => {
  const BASEURL = "http://localhost:8000/api/";

  const router = useRouter();

  const [showArti, setShowArti] = useState<introduce>({
    title: "",
    createTime: "",
    description: "",
    types: "",
    id: "",
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setShowArti(props);
  }, []);

  const toDetail = (id: string) => {
    router.push(`/detail/${id}`);
  };

  const handleDelete = () => {
    setOpen(true);
  };

  const handleOK = () => {
    const id = showArti.id;
    axios.post(
      `${BASEURL}article/delete`,
      { id: id },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setOpen(false);
  };

  const handleNO = () => {
    setOpen(false);
  };
  return (
    <>
      {
        <Modal
          title='是否确认删除'
          open={open}
          onOk={handleOK}
          onCancel={handleNO}
        ></Modal>
      }
      <div className='article_total'>
        <div className='article_title' onClick={() => toDetail(showArti.id)}>
          {showArti.title}
        </div>
        <div className='article_time'>{showArti.createTime}</div>
        <div className='article_intro'>{showArti.description}</div>
        <div className='article_reading'>阅读全文</div>
        <span className='article_type_div'>{showArti.types}</span>
        <span className='article_type_div' onClick={handleDelete}>
          删除
        </span>
      </div>
    </>
  );
};
export default App;
