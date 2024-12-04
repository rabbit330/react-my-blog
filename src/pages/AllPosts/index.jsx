import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import clsx from "clsx";
import { categories } from "@/utils/common";
import { usePostStore } from "@/store/post.js";

const languageList = {
  zh: "zh_TW",
  en: "en_US",
};

/*const categories = [
  "all",
  "travel",
  "eat",
  "relax",
  "spiritual",
  "essay",
  "work",
];*/
const AllPosts = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = usePostStore();
  const { t } = useTranslation();
  const [language, setLanguage] = useState(languageList.zh);
  const [filterPosts, setFilterPosts] = useState(posts);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const changeLanguage = () => {
    const newLanguage =
      language === languageList.zh ? languageList.en : languageList.zh;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const handleCategory = (category) => {
    // 改變激活分類主題
    setActiveCategory(category);
    // 改變顯示頁面貼文
    if (category === "all") {
      setFilterPosts(posts);
      return;
    }
    const newPosts = posts.filter((item) => item.category.includes(category));
    setFilterPosts(newPosts);
  };

  return (
    <>
      <section id="socialmedia"></section>
      <main id="all_main">
        <div className="all_post">
          <div className="row">
            <div className="col-2">
              <div className="aside border border-solid border-gray-400 shadow-primary w-40 h-[280px]">
                <a>{t("catalog")}</a>
                <ul>
                  {categories.map((item) => (
                    <li
                      onClick={() => handleCategory(item)}
                      key={item}
                      className={clsx(
                        "border-b border-solid border-gray-400 cursor-pointer",
                        { "text-activeBlue font-bold": item === activeCategory }
                      )}
                    >
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-10">
              <div className="post_container">
                <div className="allpost">所有文章</div>
                <div className="row">
                  {filterPosts.map((item) => (
                    <div key={item.id} className="col-4">
                      <PostCard
                        image={item.image}
                        title={item.title}
                        content={item.content}
                        time={item.creactedAt}
                        tags={item.category}
                        onClick={() => navigate(`/post/${item.id}`)}
                      />
                    </div>
                  ))}
                  <div className="more_post">
                    <button className="more_post_btn">顯示更多...</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default AllPosts;
