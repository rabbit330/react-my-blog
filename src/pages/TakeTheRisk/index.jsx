import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const TakeTheRisk = () => {
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
                <h1>《Take the Risk》讀後心得：如何在生活中實踐風險管理</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <div experience_container>
                  <p className="experience">
                    讀完本·卡森（Ben Carson）的《Take the
                    Risk》後，我深受啟發。這本書從風險與選擇的角度，帶我深入思考人生中的各種決策，並學會用一種務實而積極的態度面對不確定性。以下是我的一些心得以及如何將其應用在生活中的實踐。
                  </p>
                  <p className="experience">
                    書中提到一個重要的概念：「最佳/最差分析法」（Best/Worst
                    Analysis），幫助我們理性評估選擇的後果。當面臨一個重要的決定時，我試著問自己：
                    1. 最好的情況是什麼？ 2. 最壞的情況是什麼？ 3.
                    我能接受最壞的結果嗎？
                    這個方法讓我在日常生活中更冷靜地面對選擇。例如，在工作中接手一個新挑戰時，我分析過風險後發現，最壞的結果不過是學到經驗並改善未來，而最好的結果卻能讓我實現突破。這樣的分析讓我更有信心去嘗試。
                  </p>
                  <p className="experience_1">
                    《Take the
                    Risk》鼓勵我們不要被恐懼束縛，因為大部分的恐懼其實來源於未知。書中的案例，比如卡森面對複雜手術的故事，展現了勇於冒險的重要性。這讓我反思自己的生活：是否有時因為害怕失敗而錯失了成長的機會？
                    因此，我開始嘗試一些自己過去不敢嘗試的事物，從報名新的課程到參加陌生領域的社交活動。雖然一開始感到不適應，但每一次挑戰都讓我感受到成長的快樂。
                  </p>
                  <p className="experience">
                    書中強調，冒險的意義在於它是否能帶來真正的價值。生活中，我學會把焦點放在長遠的目標上，而非短期的得失。例如，投資時間去學習新技能或建立健康的生活習慣，可能短期看不到成果，但長期卻能帶來巨大的回報。這讓我在日常決策中更注重事情的核心價值，而非被表面的風險嚇退。
                  </p>
                  <p className="experience">
                    《Take the
                    Risk》讓我意識到，接受風險的第一步，是坦誠面對自己的恐懼與渴望。很多時候，我們害怕失敗，實際上是因為害怕面對別人的評價。因此，我開始學著放下對外界的過度關注，將注意力轉向自己內心真正的需求，讓每一次選擇更貼近自己的價值觀。
                  </p>
                  <p className="experience">
                    《Take the
                    Risk》教會我的，不僅僅是如何評估風險，更是一種面對人生的態度——勇敢但不莽撞，理性卻不冷漠。我明白了，風險並不可怕，可怕的是因為恐懼而停滯不前。在未來，我希望能繼續實踐書中的理念，勇於嘗試，從風險中挖掘成長的機會，讓自己的生活變得更豐富多彩。
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

export default TakeTheRisk;
