import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Post8 = () => {
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
                <h1>去去壓力走：香氛蠟燭及熱水澡</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/6811703/pexels-photo-6811703.jpeg?auto=compress&cs=tinysrgb&w=800"
                />
                <div experience_container>
                  <p className="experience">
                    休假對我來說，不僅是暫時遠離工作的忙碌，更是給自己一個機會，讓身體和心靈徹底放鬆，重拾能量。我有一套專屬的放鬆儀式，每次都能讓我從一週的疲憊中解脫，重新感受生活的美好。
                  </p>
                  <p className="experience_1">
                    我的放鬆儀式始於一場流汗的運動。不管是慢跑、瑜伽，還是簡單的拉伸運動，都能讓我感受到身體的活力被重新喚醒。每次運動後，身上的緊繃感逐漸消失，心情也隨之變得愉悅。一邊聽著節奏輕快的音樂，一邊感受每一次深呼吸，彷彿所有的壓力都隨著汗水一起被排出。
                  </p>
                  <p className="experience">
                    運動結束後，我喜歡在房間點上一支香氛蠟燭。淡雅的香氣在空氣中蔓延，彷彿將整個空間都包裹在一種平靜而溫暖的氛圍中。我偏愛木質香調或淡淡的花香，比如檀香、薰衣草，或者佛手柑的清新香味。這些香氣不僅能安撫情緒，還能讓整個身心迅速進入放鬆的狀態。
                  </p>
                  <p className="experience">
                    接著，我會準備一個熱水澡，這是我整個放鬆過程中最期待的部分。溫熱的水流輕輕包裹著全身，洗去一週的疲憊。我有時會在水中滴幾滴精油，比如尤加利或洋甘菊，讓香氣與水蒸氣一同作用，給身體和心靈帶來雙重的舒適感。
                    浸泡在水中的時候，我會閉上眼睛，什麼都不想，只是專注於此刻的感受。聽著輕柔的音樂，或者乾脆享受片刻的寂靜，彷彿時間都變得緩慢起來。在這段時間裡，我感覺自己的身心達到了完全的放鬆，所有的壓力與煩惱似乎都被溶解在水中。
                  </p>
                  <p className="experience">
                    這樣的放鬆儀式，對我來說是一種充電的方式。不僅是對身體的照顧，也是一種與自己對話的過程。在繁忙的日子裡，我們常常忽略了內心真正的需求，而這些休假的片刻，正是我重新找回自己的機會。
                    結束一天的放鬆後，我總能感到自己變得更加輕盈與自在。壓力被釋放後，腦海裡浮現的，不再是過去的疲憊，而是對未來的期待與動力。這樣的放鬆方式，讓我能夠以更好的狀態，迎接接下來的一週挑戰，也更加珍惜生活中的每一刻美好。
                  </p>
                </div>
                <div className="hashtag">#泡澡 #香氛蠟燭 #釋放壓力</div>
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
                  <div className="travel">#放鬆</div>
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

export default Post8;
