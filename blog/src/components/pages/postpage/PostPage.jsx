import s from "./PostPage.module.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const PostPage = () => {
  return (
    <div className={s.postPage}>
      <h1 className={s.postTitle}>Lorem ipsum dolor sit amet.</h1>
      <p className={s.postAuthor}>Author: <b>Suresh</b></p>
      <p className={s.postDate}>01/02/2024</p>
      <div className={s.postOp}>
        <FaRegEdit />
        <RiDeleteBinLine />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam, at
        doloribus odio voluptate assumenda quos vitae? Placeat minus commodi
        iusto cum facilis, consequatur quo praesentium aut suscipit eligendi!
        Rem et ducimus similique nemo repudiandae laborum doloremque, repellat
        ex modi illum recusandae accusantium facilis, possimus sapiente
        doloribus sequi quia ab commodi quae libero. Praesentium distinctio rem
        explicabo iusto nemo sapiente fugiat cum aperiam aliquid error velit
        cumque sed iste quidem, modi quos nesciunt accusantium maiores
        laudantium et suscipit eveniet officia! Nihil, eaque repudiandae ipsum
        minus nostrum nobis? Exercitationem odio dicta reprehenderit quisquam
        explicabo sed quia in eius, est officia veniam.
      </p>
    </div>
  );
};

export default PostPage;
