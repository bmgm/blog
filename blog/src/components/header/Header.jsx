import s from "./Header.module.css";
import { headerImg } from "../../assets/images";
import TopBar from "../topbar/TopBar";
const Header = () => {
  return (
    <div className={s.head}>
      <TopBar />
      <div className={s.header}>
        <div className={s.headerTitles}>
          <span className={s.headerTitleSm}>React & Node</span>
          <span className={s.headerTitleLg}>Blog</span>
        </div>
        {/* <img className={s.headerImg} src={headerImg} alt="" /> */}
      </div>
    </div>
  );
};

export default Header;
