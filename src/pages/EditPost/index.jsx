import "./index.css";
import { categories } from "@/utils/common";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import clsx from "clsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { usePostStore } from "@/store/post.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

const EditPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, setPosts } = usePostStore();
  const post = posts.find((item) => item.id === Number(id));
  const [title, setTitle] = useState(post.title);
  const [postCategories, setCategories] = useState(post.category);
  const [content, setContent] = useState(post.content);

  const handleCategory = (category) => {
    if (postCategories.includes(category)) {
      //移除
      const newCategory = postCategories.filter((item) => item !== category);
      setCategories(newCategory);
    } else {
      //新增
      const newCategory = [...postCategories, category];
      setCategories(newCategory);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      id: Date.now(),
      title,
      category: postCategories,
      content,
      createdAt: Math.floor(Date.now() / 1000),
      comment: [],
      likeAmount: 0,
    };
    const newPosts = posts.map((item) => {
      if (item.id === Number(id)) {
        item.title = title;
        item.category = postCategories;
        item.content = content;
        return item;
      }
      return item;
    });
    setPosts(newPosts);
    navigate("/all");
    message.success("已編輯文章");
    console.log(formData);
  };
  const handleContentChange = (value) => {
    console.log("value", value);
    setContent(value);
  };

  return (
    <>
      <section id="socialmedia"></section>
      <div className="post">編輯文章</div>
      <main id="main">
        <div className="eddit_form_container">
          <form onSubmit={submit} id="eddit_form" action="">
            <div className="group_container">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="post_title"
                type="text"
                placeholder="請輸入文章標題"
              />
            </div>
            <div className="btn_container">
              {categories
                .filter((category) => category !== "all")
                .map((item) => (
                  <button
                    type="button"
                    onClick={() => handleCategory(item)}
                    key={item}
                    className={clsx(
                      "border-b border-solid border-gray-400 cursor-pointer border px-2  py-1 rounded-[24px] mr-2",
                      {
                        "bg-activeBlue font-bold text-white":
                          postCategories.includes(item),
                      }
                    )}
                  >
                    {t(item)}
                  </button>
                ))}
            </div>
            <div className="">
              <ReactQuill
                className=" h-full"
                theme="snow"
                value={content}
                onChange={handleContentChange}
                placeholder="今天想寫些什麼..."
              />
            </div>
            <button className="postbtn">發表文章</button>
          </form>
        </div>
      </main>
      <section id="socialmedia">
        <ul id="social_container" className="nav">
          <li className="nav_item">
            <a href="#" className="nav_link">
              <i className="fa-brands fa-facebook-f"></i> facebook
            </a>
            <a href="#" className="nav_link">
              <i className="fa-brands fa-instagram"></i> instagram
            </a>
            <a href="#" className="nav_link">
              <i className="fa-brands fa-x-twitter"></i> twitter
            </a>
            <a href="#" className="nav_link">
              <i className="fa-brands fa-threads"></i> thread
            </a>
          </li>
        </ul>
        <div className="photo_line">
          <div className="selection">
            <div className="selection_link"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditPost;
