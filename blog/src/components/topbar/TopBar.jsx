import React, { isValidElement } from "react";
import s from "./TopBar.module.css";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquarePinterest,
  FaSquareInstagram,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

const TopBar = () => {
  return (
    <nav>
      <div className={s.top}>
        <div className={s.topLeft}>
          <FaSquareFacebook className={s.topIcon} />
          <FaSquareXTwitter className={s.topIcon} />
          <FaSquarePinterest className={s.topIcon} />
          <FaSquareInstagram className={s.topIcon} />
        </div>
        <div className={s.topCenter}>
          <ul className={s.topList}>
            <li className={s.topListItem}>HOME</li>
            <li className={s.topListItem}>ABOUT</li>
            <li className={s.topListItem}>CONTACT</li>
            <li className={s.topListItem}>WRITE</li>
            <li className={s.topListItem}>LOGOUT</li>
          </ul>
        </div>
        <div className={s.topRight}>
          <img
            className={s.topImg}
            src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"
            alt="profile picture"
          />
          <IoSearch className={s.searchIcon} />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
