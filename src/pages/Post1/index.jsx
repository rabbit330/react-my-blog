import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { usePostStore } from "@/store/post.js";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatDate } from "@/utils/common.js";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { message } from "antd";

const Post1 = () => {
  const { posts, setPosts } = usePostStore();
  const { id } = useParams();
  const { t } = useTranslation();
  const post = posts.find((item) => item.id === Number(id));

  return (
    <>
      <section id="socialmedia"></section>
      <main id="all_main">
        <div className="row">
          <div className="col-8">
            <div className="container">
              <div className="edditor_imfor">
                <div className="name">味噌湯裡的通心粉</div>
                <span className="time">{formatDate(post.createdAt)}</span>
                <span className="time">· 2 min</span>
                <h1>{post.title}</h1>
                <h3>恬靜湖畔的沉浸式度假體驗</h3>
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
              <div className="viewer1_comment_container border-b border-solid border-gray-400 cursor-pointer border rounded-[5px] py-5 px-14 mb-5 mt-5">
                <div className="viewer_line1 flex ">
                  <div className="viewer">
                    <a href="" class="user_link">
                      <i class="fa-solid fa-user"></i>
                    </a>
                  </div>
                  <div className="viewer_imfor">
                    <div className="viewer_name">Connie</div>
                    <span className="viewer_time">Sep 1,2024</span>
                    <span className="viewer_time">· 2 min</span>
                  </div>
                </div>
                <div className="viewer_comments">
                  <p class="coment_text">太酷辣。</p>
                </div>
                <hr />
              </div>
              <div className="viewer1_comment_container border-b border-solid border-gray-400 cursor-pointer border rounded-[5px] py-5 px-14 mb-5">
                <div className="viewer_line1 flex ">
                  <div className="viewer">
                    <a href="" class="user_link">
                      <i class="fa-solid fa-user"></i>
                    </a>
                  </div>
                  <div className="viewer_imfor">
                    <div className="viewer_name">David</div>
                    <span className="viewer_time">Sep 23,2024</span>
                    <span className="viewer_time">· 2 min</span>
                  </div>
                </div>
                <div className="viewer_comments">
                  <p class="coment_text">土耳其好棒。</p>
                </div>
                <hr />
              </div>
              <div className="comment_container">
                <div className="eddit">Comments</div>
                <div className="eddit_below">
                  Write a comment...
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Post1;
