import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Post3 = () => {
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
                <h1>每日指示卡：塔羅牌中的「太陽」牌</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/7947794/pexels-photo-7947794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div experience_container>
                  <p className="experience">
                    每日使用塔羅牌為自己抽一張指示卡，已成為我生活中的一部分。這是一種沉澱內心、尋求靈感的方式，也是一個和自己對話的儀式。今天，當我在整齊排列的牌堆中隨意抽出一張卡片時，看到那張帶著耀眼光芒的「太陽」牌，心中頓時湧上一股暖意。
                  </p>
                  <p className="experience">
                    塔羅牌中的太陽牌，是二十二張大阿爾克那牌之一，象徵著光明、成功與希望。畫面上，一輪明亮的太陽高懸天空，散發出溫暖的光芒；一名純真的孩童騎著白馬，臉上洋溢著歡快的笑容，周圍點綴著盛開的向日葵。這幅畫面傳遞著純粹的幸福、成長與能量，彷彿提醒我們，無論身處何境，光明與希望總在眼前。
                    當抽到太陽牌時，它通常代表著積極的預兆，預示著困難即將結束，未來一片光明。對我而言，這張牌不僅是一個好兆頭，更像是一種無聲的鼓勵，告訴我需要以開放的心態去擁抱當下的美好。
                  </p>
                  <p className="experience_1">
                    最近的我，正陷入一種思緒混亂的狀態，對未來的方向感到些許迷茫。然而，當抽到太陽牌時，心中仿佛被點亮了一盞燈。我開始思考，或許答案不在於追尋，而在於信任——相信生活的進程，相信自己的能力。太陽牌提醒我，用一顆純真的心去看待生活，問題往往會隨著我們心態的轉變而解決。
                    這張牌也告訴我，應該多去關注那些讓我感到溫暖與幸福的事情，例如和朋友的交流、陽光下的散步、或是一杯溫熱的咖啡。它教會我將目光從困境轉移到那些「光明的角落」。
                  </p>
                  <p className="experience">
                    抽牌的過程是一個靜心的儀式。桌上擺滿了一張張圖案鮮豔的塔羅牌，它們各自帶著獨特的能量。當我閉上眼，專注於內心的提問時，手指在牌堆間游走，直至直覺讓我停下。這種連結感令人安心，彷彿牌中藏有宇宙的一絲暗示，指引著我的方向。
                    太陽牌的出現，彷彿為這個簡單的儀式增添了一層神聖感。它提醒我，生活的豐富與多彩不僅存在於大事件中，也潛藏在日常的小細節裡。每次抽牌的結果，實際上都取決於我們如何詮釋。今天的太陽牌，像一位溫柔的導師，鼓勵我以積極的態度迎接新的一天。
                  </p>
                  <p className="experience">
                    抽到太陽牌後，我整理好心情，深吸一口氣，感到一股溫暖的能量注入全身。那輪耀眼的太陽彷彿在對我微笑，告訴我：所有的努力都不會白費，前方的道路將會越來越明朗。
                    每一次抽牌，都是一次與自己內心的對話，而今天的太陽牌，給了我力量，也帶來了希望。我將以這份陽光般的正能量，踏實地迎接每一刻的到來，並期待明天的更多可能性。
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

export default Post3;
