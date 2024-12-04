import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Post7 = () => {
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
                <h1>圖表上的數字與未來的願景</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800"
                />
                <div experience_container>
                  <p className="experience">
                    今天的工作會議，我們使用了一組精心製作的圖表，回顧了公司這一季的營收表現。透過數據的分析和視覺化的呈現，讓每位員工都清楚地看到了公司的現況，也明白了我們未來努力的方向。
                  </p>
                  <p className="experience_1">
                    首先，我們展示了這一季的營收趨勢圖。折線圖顯示出整季的收入波動：有些月份的表現亮眼，而有些月份則低於預期。我們將數據細分為不同的業務線，並通過柱狀圖比較了各部門的貢獻比例。會議上，我們不僅討論了營收增長的亮點，也分析了需要改進的地方，例如特定市場的拓展不足或某些產品線的銷量下降。
                    透過圖表的分析，大家能一目了然地了解自己的工作與公司整體營收之間的關聯，並對如何優化業務流程有了更具體的想法。
                  </p>
                  <p className="experience">
                    在討論數據後，我向團隊闡述了一個重要的觀點：營收的增長，最終會反映在每位員工的薪資與福利上。
                    我們希望員工能將自己的努力與公司的成就緊密聯繫，因為公司的成功就是大家的成功。
                    我分享了幾個實例，說明那些營收數據背後，是團隊合作、創新思維和對目標的堅持所帶來的成果。我強調，無論是業務部門的業績提升，還是支持部門的高效運行，每個人都在這些圖表上的數字中佔有一份功勞。
                  </p>
                  <p className="experience">
                    會議的最後，我邀請每位員工思考自己的角色，並提出這樣的問題：
                    1. 我們還能如何為公司的成長做出貢獻？ 2.
                    如何讓自己的工作價值最大化，為未來的薪資創造可能性？
                    透過這樣的討論，大家不僅看到問題，也提出了解決方案。例如，銷售團隊計劃更加精準地分析市場需求，技術團隊則提出優化產品功能以提升用戶體驗，而行政部門則表示會進一步簡化流程，讓內部運作更高效。
                  </p>
                  <p className="experience">
                    我在結尾總結到：今天我們分析的是過去的數據，而未來的圖表，正等待著我們一起去創造。
                    無論目前的營收曲線呈現什麼樣的狀態，只要全員上下齊心，堅持不懈地努力，下一個季度，我們的數據將會更加令人驕傲。
                    希望透過這次會議，每位員工都能帶著清晰的目標和滿滿的信心，投入到接下來的工作中。我們不僅是在為公司奮鬥，更是在為自己的價值和未來的美好生活努力。讓我們一起攜手，創造更加耀眼的成果！
                  </p>
                </div>
                <div className="hashtag">#工作 #圖表 #未來願景</div>
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
                  <div className="travel">#工作</div>
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

export default Post7;
