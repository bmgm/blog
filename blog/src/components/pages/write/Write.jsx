import s from "./Write.module.css";
import { IoAddCircleOutline } from "react-icons/io5";

const Write = () => {
  return (
    <div className={s.write}>
      <form action="" className={s.writeForm}>
        <div className={s.writeFormGroup}>
          <label htmlFor="fileInput">
            <IoAddCircleOutline className={s.writeIcon} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className={s.writeInput}
            autoFocus={true}
          />
        </div>
        <div className={s.writeFormGroup}>
          <textarea
            className={s.writeText}
            placeholder="Tell your story..."
            type="text"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className={s.writeSubmit}>Publish</button>
      </form>
    </div>
  );
};

export default Write;
