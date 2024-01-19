import Post from "../post/Post"
import s from "./Posts.module.css"

const Posts = () => {
  return (
    <div className={s.posts}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts