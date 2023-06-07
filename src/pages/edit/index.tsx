import SideBar from "@/component/sideBar";
import EditArticle from "@/component/editArticle";
import { useRouter } from "next/navigation";
import "./index.scss";
import { useEffect } from "react";

const App: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/edit/vertify");
    }
  }, []);
  return (
    <>
      <div className='edit_flex'>
        <SideBar />
        <EditArticle />
      </div>
    </>
  );
};
export default App;
