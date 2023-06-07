import "./index.scss";
import SideBar from "@/component/sideBar";
const App = () => {
  const toGithub = () => {
    window.open("https://github.com/wjywy?tab=repositories");
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div
          style={{ width: "85%", marginLeft: "2%", backgroundColor: "#FDFDFD" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{ marginTop: "2vh", fontSize: "20px", color: "#999999" }}
            >
              关于博主
            </div>
            <div
              style={{
                width: "95%",
                height: "1px",
                backgroundColor: "#EEEEEE",
              }}
            ></div>
          </div>
          <div
            style={{
              marginTop: "2vh",
              width: "95%",
              height: "80vh",
              backgroundColor: "#FFFFFF",
              border: "1px solid #EEEEEE",
              fontSize: " 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: "2vh" }}> 前端小菜鸡一枚，欢迎加V</div>
            <img src='/weChat.jpg' alt='caicai' className='author_img' />
            <div className='author_about' onClick={toGithub}>
              点击了解更多
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
