import { useRef, useState } from "react";
import axios from "axios";
import "./index.scss";

const App: React.FC = () => {
  const fileRef = useRef<any>(null);
  const [des, setDes] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [arType, setArType] = useState<string>("");

  // 收集上传数据

  let name: any;
  const selectFile = () => {
    let file = fileRef.current!.files[0];
    name = file.name.split(".")[1]; // 获取文件后缀
    console.log(name);
  };

  const toSubmit = () => {
    let formData = new FormData();
    let file = fileRef.current!.files[0];
    if (name === "md") {
      formData.append("uploadFile", file);
    } else {
      alert("请选择后缀为md格式的文件");
      return;
    }
    formData.append("title", title);
    formData.append("description", des);
    formData.append("types", arType);
    console.log(arType);
    axios.post("http://localhost:8000/article/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data; charset=UTF-8",
        Authorization: localStorage.getItem("token"),
      },
    });
  };
  return (
    <>
      <div className='editArticle_flex'>
        <input
          type='file'
          name='fileContent'
          ref={fileRef}
          onChange={selectFile}
        />
        <textarea
          name=''
          id=''
          placeholder='请输入文章简介'
          cols={30}
          rows={10}
          onChange={(event) => {
            setDes(event.target.value);
            console.log(des, "des");
          }}
        ></textarea>
        <input
          value={title}
          type='text'
          placeholder='请输入文章标题'
          onChange={(event) => {
            setTitle(event.target.value);
            console.log(title, "title");
          }}
        />
        <input
          type='text'
          placeholder='请输入文章类别'
          value={arType}
          onChange={(event) => {
            setArType(event.target.value);
          }}
        />
        <button onClick={toSubmit}>点击上传</button>
      </div>
    </>
  );
};
export default App;
