import ReactQuill from "react-quill";
import { formatDate } from "@/utils/common.js";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useState, useEffect } from "react";
import { usePostStore } from "@/store/post.js";

const WrightComment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { posts, setPosts } = usePostStore();

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      id: Date.now(),
      createdAt: Math.floor(Date.now() / 1000),
      comment: [],
    };
    setPosts([...posts, formData]);
    navigate("/post/:id");
    message.success("已新增留言");
    console.log(formData);
  };
  const handleContentChange = (value) => {
    console.log("value", value);
    setContent(value);
  };

  return (
    <form
      onSubmit={submit}
      id="comment_container"
      action=""
      className="comment_container"
    >
      <div className="eddit">Comments</div>
      <div className="mt-2">
        <ReactQuill
          className=" h-full"
          theme="snow"
          value={content}
          onChange={handleContentChange}
          placeholder="Write something..."
        />
        <div className="tool_container">
          <a href="" className="tool_link">
            <i className="fa-solid fa-face-smile"></i>
          </a>
          <a href="" className="tool_link">
            <i className="fa-solid fa-camera"></i>
          </a>
          <a href="" className="tool_link">
            <i className="fa-solid fa-video"></i>
          </a>
        </div>
      </div>
      <div className="cancel_container">
        <p className="member">Log in to publish as a member</p>
        <div>
          <button className="cancel">Cancel</button>
          <button className="publish">Publish</button>
        </div>
      </div>
    </form>
  );
};

export default WrightComment;
