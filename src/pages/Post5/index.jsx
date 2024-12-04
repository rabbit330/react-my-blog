import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Post5 = () => {
  return (
    <>
      <section id="socialmedia"></section>
      <main id="all_main">
        <div className="row">
          <div className="col-8">
            <div className="container">
              <div className="edditor_imfor">
                <div className="name">味噌湯裡的通心粉</div>
                <span className="time">Sep 1,2024</span>
                <span className="time">· 2 min</span>
                <h1>今日份隨手札記</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/4160143/pexels-photo-4160143.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <div experience_container>
                  <p className="experience">
                    一早醒來，窗外的天空是一片柔和的淺藍，陽光透過窗簾，輕輕灑在房間的地板上。我靜靜地坐在床邊，喝了一杯溫熱的黑咖啡，感覺新的一天充滿了無限可能。開啟筆記本，整理了今天的待辦事項，心中默默提醒自己：不急不躁，一件一件完成。
                  </p>
                  <p className="experience">
                    工作時，迎接了一些棘手的挑戰。雖然遇到幾個卡點，但在反覆推敲和思考後，終於找到了解決的方法。這種解題的過程，雖然有些壓力，卻也讓我感覺到自己的成長。偶爾抬頭看看書桌旁的小植物，那翠綠的葉片像在給我加油打氣。
                  </p>
                  <p className="experience_1">
                    午餐選了簡單的三明治和湯，搭配一杯果汁，剛剛好能補充能量。用餐後，我抽空在陽台上待了一會兒，感受微風拂面。看著遠處的天際線，不禁思考著最近的生活方向。這段時間，彷彿找到了一些內心的平衡點，雖然生活中的難題還在，但心態上輕鬆了不少。
                  </p>
                  <p className="experience">
                    結束了一天的工作，我特地抽空寫了一些筆記，總結今天的收穫和反思。腦海中閃過的，是今天的效率和幾次靈光乍現的時刻。對自己說聲「辛苦了」，也提醒自己要多給自己一些肯定。
                  </p>
                  <p className="experience">
                    晚餐後，點了一支香氛蠟燭，讓整個房間都充滿了淡淡的木質香氣。翻開一本書，沉浸在文字的世界中。不知不覺間，時間流逝，心卻越來越平靜。今天的最後一件事，是給自己留下一段空白的時間，什麼也不做，只是靜靜地感受當下，讓一天的思緒慢慢沉澱。
                  </p>
                  <p className="experience">
                    今天的節奏並不算快，但每一刻都很真實。無論是小的成就還是短暫的放鬆，都讓我意識到：生活的美好，往往藏在這些不經意的細節裡。明天再努力，今天，就用一份平靜的心情畫上句號吧。
                  </p>
                </div>
                <div className="hashtag">#塔羅牌 #太陽牌 #向日葵</div>
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
                    <a href="" className="share_link">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                  <div className="travel">#美食</div>
                </div>
                <div className="text_icon">
                  <div className="view">
                    <span className="viel">20 viwers</span>
                    <a href="" className="text_link">
                      <i className="fa-regular fa-comment"></i>
                    </a>
                    <span className="viel">0</span>
                  </div>
                  <div className="heart">
                    <span className="viel">10</span>
                    <a href="" className="text_link">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments">
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

export default Post5;
