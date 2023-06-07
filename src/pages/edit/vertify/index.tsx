import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SideBar from "@/component/sideBar";
import "./index.scss";
const App = () => {
  const [pwd, setPwd] = useState<string>("");
  const router = useRouter();
  const judgePass = () => {
    console.log("jjj");
    axios
      .get(`http://localhost:8000/user/vertify?password=${pwd}`)
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("token", res.data.data.token);
          router.push("/edit");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("暂无权限");
      });
  };
  return (
    <>
      <div className='vertify_flex'>
        <SideBar />
        <div className={"vertify_title"}>
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
              编辑鉴权
            </div>
            <div
              style={{
                width: "95%",
                height: "1px",
                backgroundColor: "#EEEEEE",
              }}
            ></div>
          </div>
          <div style={{ marginTop: "2vh" }}>
            <input
              type='text'
              value={pwd}
              placeholder={"请输入密码"}
              onChange={(event) => {
                setPwd(event.target.value);
              }}
              style={{ marginLeft: "2vw" }}
            />
            <button onClick={judgePass}>点击鉴权</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
