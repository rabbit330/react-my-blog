import "./index.css";
const PostCard = ({ image, title }) => {
  return (
    <div className="post-card">
      <img className="post-image" src={image} alt="" />
      <h1 className="post-link">{title}</h1>
    </div>
  );
};

export default PostCard;
