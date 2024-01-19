import s from "./Sidebar.module.css";
import { guy } from "../../assets/images";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquarePinterest,
  FaSquareInstagram,
} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarItem}>
        <img src={guy} alt="" />
        <h3 className={s.sidebarTitle}>ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint
          reiciendis repellat officiis blanditiis id architecto placeat, eius
          nostrum eum laboriosam unde accusamus veniam excepturi?
        </p>
      </div>
      <div className={s.sidebarItem}>
        <h3 className={s.sidebarTitle}>CATEGORIES</h3>
        <ul className={s.sidebarList}>
          <li className={s.sidebarListItem}>Life</li>
          <li className={s.sidebarListItem}>Movies</li>
          <li className={s.sidebarListItem}>Music</li>
          <li className={s.sidebarListItem}>Tech</li>
          <li className={s.sidebarListItem}>Style</li>
        </ul>
      </div>
      <div className={s.sidebarItem}>
        <h3 className={s.sidebarTitle}>FOLLOW US</h3>
        <div className={s.sidebarSocial}>
          <FaSquareFacebook className={s.sidebarIcon} />
          <FaSquareXTwitter className={s.sidebarIcon} />
          <FaSquarePinterest className={s.sidebarIcon} />
          <FaSquareInstagram className={s.sidebarIcon} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
