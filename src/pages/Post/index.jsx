import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { usePostStore } from "@/store/post.js";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatDate } from "@/utils/common.js";
import PostComment from "@/components/PostComment";
import WrightComment from "@/components/WrightComment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";

const getComments = async () => {
  const data = await axios.get("/mock/posts");
  console.log(data);
};

const Post = () => {
  const { posts, setPosts } = usePostStore();
  const { id } = useParams();
  const { t } = useTranslation();
  const post = posts.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <section id="socialmedia"></section>
      <main id="all_main">
        <div className="row">
          <div className="col-8">
            <div className="container w-[940px] relative border border-solid rounded overflow-hidden	border-[#c9c9c9]">
              <button
                onClick={() => navigate(`/edit-post/${id}`)}
                className="absolute top-4 right-4"
              >
                <i class="fa-solid fa-pen"></i>
              </button>
              <div className="edditor_imfor">
                <div className="name">味噌湯裡的通心粉</div>
                <span className="time">{formatDate(post.createdAt)}</span>
                <span className="time">· 2 min</span>
                <h1>{post.title}</h1>
                <img className="photo" src={post.image} alt="" />
                <div experience_container>{parse(post.content)}</div>
                <div className="share_icon">
                  <div className="share_container">
                    <a href="" className="share_link">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="" className="share_link">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="" className="share_link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <CopyToClipboard
                      text={window.location.href}
                      onCopy={() => message.success("成功複製連結")}
                    >
                      <button href="" className="share_link">
                        <i className="fa-solid fa-link"></i>
                      </button>
                    </CopyToClipboard>
                  </div>
                  {post.category.map((item) => (
                    <div className="travel">#{t(item)}</div>
                  ))}
                </div>
                <div className="text_icon">
                  <div className="view">
                    <a href="" className="text_link">
                      <i className="fa-regular fa-comment"></i>
                    </a>
                    <span className="viel">{post.comment.length}</span>
                  </div>
                  <div className="heart">
                    <span className="viel">{post.likeAmount}</span>
                    <a href="" className="text_link">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments">
              {post.comment.map((item) => (
                <PostComment
                  key={item.id}
                  visitor={item.visitor}
                  comment={item.content}
                  createdAt={item.createdAt}
                />
              ))}
              <WrightComment />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Post;
