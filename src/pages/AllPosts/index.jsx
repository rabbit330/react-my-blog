import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useState } from "react";

const languageList = {
  zh: "zh_TW",
  en: "en_US",
};

const AllPosts = () => {
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
      <section id="socialmedia"></section>
      <main id="all_main">
        <div className="all_post">
          <div className="row">
            <div className="col-2">
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
            <div className="col-10">
              <div className="post_container">
                <div className="allpost">所有文章</div>
                <div className="row">
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/29449542/pexels-photo-29449542.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>探索土耳其：品味地道的沙威瑪</h1>
                        <p className="card_content">
                          土耳其是個充滿異域風情的國家，不僅擁有壯麗的自然景觀與豐富的歷史遺跡，其美食更是聞名世界。這次土耳其之旅，我有幸親身體驗當地的飲食文化，其中最令我念念不忘的，便是品嘗土耳其沙威瑪（Shawarma）的經歷。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Nov 20, 2024</p>
                          <p>#美食</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/29450334/pexels-photo-29450334.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>浪漫巴黎：老字號甜點店的甜蜜時光</h1>
                        <p className="card_content">
                          提到法國，許多人首先想到的是浪漫的巴黎。無論是埃菲爾鐵塔的雄偉、盧浮宮的藝術瑰寶，還是塞納河畔的詩意，這座城市總能讓人感到如夢似幻。然而，對於我這次的巴黎之行，最難忘的卻是一次味覺的邂逅——在一間老字號甜點店，與甜蜜的法式甜點共度的美好時光。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Sep 16, 2024</p>
                          <p>#旅行 #美食</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/7947794/pexels-photo-7947794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>每日指示卡：塔羅牌中的「太陽」牌</h1>
                        <p className="card_content">
                          每日使用塔羅牌為自己抽一張指示卡，已成為我生活中的一部分。這是一種沉澱內心、尋求靈感的方式，也是一個和自己對話的儀式。今天，當我在整齊排列的牌堆中隨意抽出一張卡片時，看到那張帶著耀眼光芒的「太陽」牌，心中頓時湧上一股暖意。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>May 11, 2024</p>
                          <p>#心靈</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/13321546/pexels-photo-13321546.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>借助塔羅指引：在迷霧找到方向</h1>
                        <p className="card_content">
                          最近的生活猶如迷霧重重，無論是在工作還是個人生活上，我都感到壓力與困惑並存。似乎每前進一步，都會遇到新的障礙，讓人不禁懷疑，這些困難是否是宇宙在傳遞某種訊息。為了尋求內心的平靜與方向，我決定藉助塔羅牌，透過每日抽一張指示卡的方式，嘗試了解宇宙的安排。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Apr 11, 2024</p>
                          <p>#心靈</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/4160143/pexels-photo-4160143.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>今天的隨手札記</h1>
                        <p className="card_content">
                          一早醒來，窗外的天空是一片柔和的淺藍，陽光透過窗簾，輕輕灑在房間的地板上。我靜靜地坐在床邊，喝了一杯溫熱的黑咖啡，感覺新的一天充滿了無限可能。開啟筆記本，整理了今天的待辦事項，心中默默提醒自己：不急不躁，一件一件完成。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Jan 31, 2024</p>
                          <p>#札記</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>《Take the Risk》:如何在生活中實踐風險管理</h1>
                        <p className="card_content">
                          讀完本·卡森（Ben Carson）的《Take the
                          Risk》後，我深受啟發。這本書從風險與選擇的角度，帶我深入思考人生中的各種決策，並學會用一種務實而積極的態度面對不確定性。以下是我的一些心得以及如何將其應用在生活中的實踐。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Mar 31, 2024</p>
                          <p>#札記</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>圖表上的數字與未來的願景</h1>
                        <p className="card_content">
                          今天的工作會議，我們使用了一組精心製作的圖表，回顧了公司這一季的營收表現。透過數據的分析和視覺化的呈現，讓每位員工都清楚地看到了公司的現況，也明白了我們未來努力的方向。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Jun 1, 2024</p>
                          <p>#工作</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/6811703/pexels-photo-6811703.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>去去壓力走：香氛蠟燭及熱水澡</h1>
                        <p className="card_content">
                          休假對我來說，不僅是暫時遠離工作的忙碌，更是給自己一個機會，讓身體和心靈徹底放鬆，重拾能量。我有一套專屬的放鬆儀式，每次都能讓我從一週的疲憊中解脫，重新感受生活的美好。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Jun 1, 2024</p>
                          <p>#放鬆</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="postcard">
                      <img
                        className="postimage"
                        src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                      />
                      <div className="post_content">
                        <h1>感受春日浪漫：櫻花盛開的大阪城</h1>
                        <p className="card_content">
                          一早，我搭乘地鐵來到大阪城公園站，沿著公園小徑慢慢步行至大阪城。還沒進入城內，周圍的櫻花樹已經展現出令人驚嘆的美景。粉白的櫻花如雲般覆蓋整片樹梢，在和煦的陽光下閃閃發光，微風輕拂，花瓣如細雪般飄落，讓整個公園彷彿置身童話世界。
                        </p>
                        <p className="card_content">閱讀更多......</p>
                        <div className="post_time">
                          <p>Apr 17, 2024</p>
                          <p>#旅行</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
