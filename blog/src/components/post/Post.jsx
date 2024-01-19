import s from "./Post.module.css";
import { postsImg } from "../../assets/images";

const Post = () => {
  return (
    <div className={s.post}>
      <img className={s.postImg} src={postsImg[0]} alt="" />
      <div className={s.postInfo}>
        <div className={s.postCats}>
          <span className={s.postCat}>Music</span>
          <span className={s.postCat}>Life</span>
        </div>
        <h2 className={s.postTitle}>Lorem ipsum dolor sit amet consectetur.</h2>
        <p className={s.postDate}>1 hr ago</p>
        <p className={s.postDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          commodi totam qui, pariatur doloribus eligendi illum est deleniti
          harum quis hic aliquam, eaque sed soluta?
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Post;
