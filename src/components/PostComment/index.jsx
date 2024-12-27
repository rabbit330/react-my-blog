import { Link } from "react-router-dom";
import "./index.css";
import { formatDate } from "@/utils/common.js";
import { usePostStore } from "@/store/post.js";

const PostComment = ({ visitor, createdAt, comment }) => {
  return (
    <div className="comments">
      <div className="viewer1_comment_container border-b border-solid border-gray-400 cursor-pointer border rounded-[5px] py-5 px-14 mb-5 mt-5">
        <div className="viewer_line1 flex ">
          <div className="viewer relative top-1">
            <a href="" class="user_link ">
              <i class="fa-solid fa-user"></i>
            </a>
          </div>
          <div className="viewer_imfor ml-2">
            <div className="viewer_name">{visitor}</div>
            <span className="viewer_time text-[12px]">
              {formatDate(createdAt)}
            </span>
          </div>
        </div>
        <div className="viewer_comments">
          <p className="coment_text">{comment}</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PostComment;

/*
const Comment = ({ image, title, content, time, tags, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="postcard" onClick={onClick}>
      <img className="postimage cursor-pointer" src={image} alt="" />
      <div className="post_content ">
        <h1>{title}</h1>
        <p className="card_content">{parse(content)}</p>
        <button className="card_content ">閱讀更多......</button>
        <div className="post_time">
          <p>{time}</p>
          <p>
            {tags.map((item) => (
              <span key={item}>#{t(item)}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
*/
