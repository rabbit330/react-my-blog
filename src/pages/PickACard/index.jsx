import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const PickACard = () => {
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
                <h1>借助塔羅指引：尋找生活與工作的答案</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/13321546/pexels-photo-13321546.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <div experience_container>
                  <p className="experience">
                    最近的生活猶如迷霧重重，無論是在工作還是個人生活上，我都感到壓力與困惑並存。似乎每前進一步，都會遇到新的障礙，讓人不禁懷疑，這些困難是否是宇宙在傳遞某種訊息。為了尋求內心的平靜與方向，我決定藉助塔羅牌，透過每日抽一張指示卡的方式，嘗試了解宇宙的安排。
                  </p>
                  <p className="experience">
                    塔羅牌對我來說，不僅是一種占卜工具，更是一面映照內心的鏡子。每次洗牌、切牌、抽牌的過程，都是一種與自己內心對話的儀式。透過這些古老的圖案與象徵符號，我能更清晰地看見自己所處的狀態，以及未來可能的方向。
                    當我靜下心，將雙手覆蓋在牌堆上，默默地向宇宙提問：「最近生活與工作中的困難，有什麼樣的安排與啟示？」我感受到一股微弱但真實的能量流動，讓我的手停在某一張牌上。隨即，我輕輕地翻開它。
                  </p>
                  <p className="experience_1">
                    翻開的那一瞬間，我看到了一張散發著力量與希望的牌卡，彷彿回答了我內心深處的疑問。無論這張牌是代表挑戰、解脫、抑或新的開始，它的意涵都深深地打動了我。透過這張卡片，我仿佛聽見宇宙在對我低語：
                    「你正經歷的每一個關卡，都是為了讓你變得更強大。現在的困難或許令人不安，但它們正幫助你蛻變為更好的自己。不要懷疑自己的能力，信任自己的直覺，因為你正走在命運安排的道路上。」
                  </p>
                  <p className="experience">
                    每次抽牌的結果，無論表面看起來多麼隨機，其實都充滿著個人化的意義。牌卡像是橋樑，連結著內心的自我與宇宙的智慧。這次的抽牌讓我反思，或許我之所以感到挫折，不是因為無法完成某些目標，而是我在過程中忽略了自我調整的重要性。
                    塔羅牌提醒我，當下的挑戰或許並非終點，而是一次過渡。它們的存在，是為了讓我學會更多生活的智慧，學會如何從壓力中找到平衡，並以更清晰的眼光看待未來的路。
                  </p>
                  <p className="experience">
                    這樣的抽牌儀式，是我每天與自己獨處的時刻。在牌卡的指引下，我得以用更積極的態度面對現實，也學會用不同的視角看待問題。儘管困難無法立即消失，但每次抽牌後，我都感受到內心的力量正在慢慢回歸。
                    塔羅牌不會直接給出具體的答案，但它帶來的啟示與提醒，卻像是黑暗中的燈塔，為我照亮前行的方向。即便宇宙的安排目前看起來模糊不清，我也選擇相信，一切的發生都有它的理由。
                  </p>
                  <p className="experience">
                    生活與工作的關卡固然令人煩惱，但它們同時也是成長的契機。在宇宙的安排下，我將繼續信任自己的步伐，耐心等待雲霧散去的時刻。每日的塔羅牌，是我內心的指南針，帶我一步步走向更加清明與堅定的未來。
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

export default PickACard;
