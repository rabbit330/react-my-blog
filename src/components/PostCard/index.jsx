import { Link } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const PostCard = ({ image, title, content, time, tags, onClick }) => {
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

export default PostCard;
