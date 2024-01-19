import { guy } from "../../../assets/images";
import s from "./Settings.module.css";
import { FaRegUserCircle } from "react-icons/fa";

const Settings = () => {
  return (
    <div className={s.settings}>
      <div className={s.settingsTitle}>
        <h3 className={s.updateAccount}>Update your account</h3>
        <h3 className={s.deleteAccount}>Delete your account</h3>
      </div>
      <form action="" className={s.settingsForm}>
        <label>Profile Picture</label>
        <div className={s.pp}>
          <img className={s.pp} src={guy} alt="" />
          <label htmlFor="fileInput">
            <FaRegUserCircle className={s.ppIcon} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>

        <label>Username</label>
        <input type="text" placeholder="Mangesh" />
        <label>Email</label>
        <input type="email" placeholder="email@gmail.com" />
        <label>Password</label>
        <input type="password" />
        <button className={s.settingsSubmit}>Update</button>
      </form>
    </div>
  );
};

export default Settings;
