import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const FranceTravel = () => {
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
                <h1>浪漫巴黎：邂逅老字號甜點店的甜蜜時光</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/29450334/pexels-photo-29450334.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <div experience_container>
                  <p className="experience">
                    提到法國，許多人首先想到的是浪漫的巴黎。無論是埃菲爾鐵塔的雄偉、盧浮宮的藝術瑰寶，還是塞納河畔的詩意，這座城市總能讓人感到如夢似幻。然而，對於我這次的巴黎之行，最難忘的卻是一次味覺的邂逅——在一間老字號甜點店，與甜蜜的法式甜點共度的美好時光。
                  </p>
                  <p className="experience">
                    漫步在巴黎的街頭，小巷深處藏著許多歷史悠久的甜點店。我慕名走進一家已有百年歷史的老字號店鋪。進門的瞬間，一股濃郁的奶香與糖香撲鼻而來，空氣中瀰漫著溫暖的甜蜜氣息。店內裝潢古典而優雅，復古的木質櫃檯與金色的鏡框裝飾，彷彿帶我穿越到了十九世紀的巴黎。
                  </p>
                  <p className="experience_1">
                    最引人注目的，當然是眼前那座精緻的甜點展架。架子上一層層地擺滿了各式各樣的甜點，每一款都如藝術品般精美：閃亮的馬卡龍、層層疊疊的千層酥、如珠寶般晶瑩的水果塔，還有散發著濃郁巧克力香氣的歌劇院蛋糕（Opéra）。每一款甜點都小巧而細緻，彷彿在向人耳語：「快來品嘗我吧！」
                  </p>
                  <p className="experience">
                    經不住誘惑，我選了一塊巴黎布雷斯特（Paris-Brest）和一個覆盆子塔（Tarte
                    aux
                    Framboises），搭配一杯濃郁的法式熱巧克力，坐在靠窗的位子開始享用。
                    巴黎布雷斯特以車輪形狀的泡芙皮為基底，中間夾著香濃的榛果奶油。第一口咬下，酥脆的泡芙皮與絲滑的奶油在口中融化，榛果的香氣撲鼻，甜而不膩，讓人不禁閉上眼睛細細品味。而覆盆子塔則是另一種截然不同的感受：酸甜的覆盆子與奶油香濃的卡士達醬相互交融，塔皮酥脆而不失韌性，清新的果香讓味蕾瞬間甦醒。
                  </p>
                  <p className="experience">
                    在這間甜點店，我得知它已有超過百年的歷史，是巴黎最具代表性的甜點店之一。許多知名的甜點如馬卡龍和巴黎布雷斯特，都起源於這裡或受到這類店鋪的推廣。這些甜點不僅是美食，更承載了巴黎人對生活的熱愛與對美的追求。
                    這些老字號店鋪，對巴黎來說就像是歷史的見證者，見證著時代的變遷，卻始終保持著對品質的堅持。當地人常說：「來巴黎不吃甜點，就等於沒來過巴黎。」此言不假，這些甜點早已融入了巴黎的靈魂。
                  </p>
                  <p className="experience">
                    當我離開甜點店時，帶走的不僅是幾盒精美的甜點，更是一份甜蜜的記憶。那一個個精緻的甜點，如同巴黎的縮影，細膩又富有層次，每一口都品嘗出法國人對生活的熱情與優雅。
                    巴黎的甜點店是味覺的殿堂，也是心靈的歸屬。在那短短的一個午後，我深深體會到法國「生活即藝術」的精髓。下次再訪巴黎，我一定會再次探訪這些老字號甜點店，與甜蜜再續前緣。
                  </p>
                </div>
                <div className="hashtag">#土耳其 #沙威瑪 #土耳其美食</div>
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

export default FranceTravel;
