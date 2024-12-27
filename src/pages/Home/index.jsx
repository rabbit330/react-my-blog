import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useState } from "react";

const languageList = {
  zh: "zh_TW",
  en: "en_US",
};

// 全局狀態 localStorage
const postCardData = [
  {
    title: "Travel",
    Image: "https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg",
  },
  {
    title: "Eat",
    Image:
      "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Relax",
    Image:
      "https://images.pexels.com/photos/4790579/pexels-photo-4790579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Spiritual",
    Image:
      "https://life-tree.org.tw/wp-content/uploads/2021/12/biblestudy-2.jpg",
  },
  {
    title: "Essay",
    Image:
      "https://cdn.ftvnews.com.tw/manasystem/FileData/News/70c6daa0-8474-459c-b3b9-a85f8775c4be.jpg",
  },
  {
    title: "work",
    Image:
      "https://cdn.ftvnews.com.tw/manasystem/FileData/News/70c6daa0-8474-459c-b3b9-a85f8775c4be.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [language, setLanguage] = useState(languageList.zh);

  const changeLanguage = () => {
    const newLanguage =
      language === languageList.zh ? languageList.en : languageList.zh;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <section
        id="banner"
        className="bg-[url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[476px] bg-center bg-no-repeat bg-cover pt-[160px] text-mainGray"
      >
        <div className="banner_container py-[20px] bg-white/50 border border-solid border-white w-auto	my-0 mx-auto text-center	">
          <p className="banner_stittle text-[18px]">Travel Blog</p>
          <h1 className="banner_tittle text-[70px] mb-4">Going Places</h1>
          <p className="banner_para">
            I haven’t been everywhere, but it’s on my list
          </p>
        </div>
      </section>
      <section id="paragraph" className="w-4/5 m my-0 mx-auto">
        <div className="paragraph_container">
          <div className="post-container">
            <div className="row flex justify-around">
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://live.staticflickr.com/65535/54228143316_5aec41f800.jpg"
                    alt=""
                  />
                  <h1 className="post-link">{t("travel")}</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg"
                    alt=""
                  />
                  <h1 className="post-link">{t("eat")}</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <h1 className="post-link">{t("relax")}</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://images.pexels.com/photos/4790579/pexels-photo-4790579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <h1 className="post-link">{t("spiritual")}</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://life-tree.org.tw/wp-content/uploads/2021/12/biblestudy-2.jpg"
                    alt=""
                  />
                  <h1 className="post-link">{t("essay")}</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/70c6daa0-8474-459c-b3b9-a85f8775c4be.jpg"
                    alt=""
                  />
                  <h1 className="post-link">{t("work")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gray" className="h-[80px] bg-[#C9C9C9] mb-12"></section>
      <main id="main">
        <div className="main-container">
          <div className="row">
            <div className="col-2 w-1/6">
              <div className="aside border border-solid border-gray-400 shadow-primary w-40 h-[280px]">
                <a>{t("catalog")}</a>
                <ul>
                  <li className="border-b border-solid border-gray-400">
                    {t("travel")}
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    {t("eat")}
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    {t("relax")}
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    {t("spiritual")}
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    {t("essay")}
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    {t("work")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-10 w-5/6 ">
              <div className="container h-auto w-4/5 border rounded overflow-hidden shadow-[0px 0px 4px_rgba(0,0,0,0.5)]">
                <div className="picture w-[940px] h-[528px] bg-[url('https://images.pexels.com/photos/128303/pexels-photo-128303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-no-repeat bg-cover my-0 mx-auto"></div>
                <div className="coment_container h-[280px] w-[940px] my-0 mx-auto">
                  <div className="line1 w-[858px] h-[34px] flex mb-5">
                    <div className="user border border-solid border-mainGray w-8 h-8 rounded-[50%] relative">
                      <a
                        href=""
                        className="user_link block absolute top-[50%] left-[50%]"
                      >
                        <i className="fa-solid fa-user"></i>
                      </a>
                    </div>
                    <div className="user_imfor">
                      <div className="name">Connie</div>
                      <span className="time">Sep 1,2024</span>
                      <span className="time">· 2 min</span>
                    </div>
                  </div>
                  <div className="coment">
                    <h1 className="coment_tittle">湖邊棕色小木屋</h1>
                    <p className="coment_text">
                      在湖邊的小木屋，夜晚的魔法似乎格外迷人。這是一個如詩如畫的地方，小木屋坐落在蔚藍的湖畔，周圍被綠意盎然的樹林環繞。夕陽西下，湖面上散發出金黃色的光輝，與小木屋的輪廓交相輝映，形成一幅令人心醉的畫面。
                    </p>
                    <p className="coment_text">
                      當夜幕降臨，湖面變成了一面巨大的鏡子，小木屋的倒影在湖水中輕輕搖曳，彷彿是一幅動人的油畫。微風拂過，湖面泛起微微的波紋，倒影隨之起伏，使得這片寧靜的天地多了一份動感的美麗。
                    </p>
                  </div>
                  <hr />
                  <div className="text_icon">
                    <div className="view">
                      <a href="" className="text_link">
                        <i className="fa-regular fa-eye"></i>
                      </a>
                      <span className="viel">0</span>
                      <a href="" className="text_link">
                        <i className="fa-regular fa-comment"></i>
                      </a>
                      <span className="viel">0</span>
                    </div>
                    <div className="heart">
                      <span className="viel">10</span>
                      <a href="" className="text_link">
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </div>
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

export default Home;
