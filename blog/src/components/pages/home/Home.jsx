import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import s from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={s.home}>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
