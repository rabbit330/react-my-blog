import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const TurkyTravel = () => {
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
                <h1>探索土耳其：品味地道的沙威瑪</h1>
                <h3>恬靜湖畔的沉浸式度假體驗</h3>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/29449542/pexels-photo-29449542.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <div experience_container>
                  <p className="experience">
                    土耳其是個充滿異域風情的國家，不僅擁有壯麗的自然景觀與豐富的歷史遺跡，其美食更是聞名世界。這次土耳其之旅，我有幸親身體驗當地的飲食文化，其中最令我念念不忘的，便是品嘗土耳其沙威瑪（Shawarma）的經歷。
                  </p>
                  <p className="experience">
                    沙威瑪是一道風靡全球的中東與地中海風味美食。雖然在許多國家都有類似的版本，但土耳其的沙威瑪獨具特色，常以新鮮的當地食材製作，讓人感受到濃厚的地方風情。在土耳其，沙威瑪更常被稱為「Döner
                    Kebab」，意思是「旋轉燒烤」，指的就是那垂直旋轉的烤肉架，無論是在大街小巷還是高檔餐廳，都能看到它的身影。
                  </p>
                  <p className="experience_1">
                    在伊斯坦堡的一個陽光明媚的午後，我走進一家充滿煙火氣息的小餐館，點了一份傳統的沙威瑪捲餅。廚師熟練地用刀削下剛剛烤好的羊肉片，肉質鮮嫩多汁，帶有微微的炭香。隨後，他將這些金黃色的肉片放入一張溫熱的餅皮中，再加入新鮮的蔬菜、洋蔥和酸奶醬。一切看似簡單，卻蘊藏著豐富的層次。
                    當我咬下第一口時，味蕾瞬間被征服。烤肉的香氣和濃郁的酸奶醬完美結合，伴隨著蔬菜的清爽與餅皮的柔韌，每一口都令人回味無窮。相比在其他國家吃過的沙威瑪，土耳其版本少了一些油膩感，多了幾分自然的鮮甜。
                  </p>
                  <p className="experience">
                    沙威瑪不僅僅是一道美食，更是土耳其文化的一部分。它起源於鄂圖曼帝國時期，並隨著帝國的擴展傳播到中東和歐洲各地。在土耳其，沙威瑪不僅是日常的街頭小吃，也是朋友聚會時的首選食物。當地人喜歡搭配一杯濃郁的土耳其茶，簡單又充滿儀式感。
                  </p>
                  <p className="experience">
                    離開土耳其時，沙威瑪成為我心中最深刻的記憶之一。它不僅代表了一種美食，更代表了一種生活方式——簡單、豐富且充滿人情味。每當我回想起那溫暖的餅皮包裹著香氣四溢的烤肉，我彷彿又回到了那個陽光灑滿的小餐館，聽著廚師和客人們的輕鬆談笑。
                  </p>
                  <p className="experience">
                    這趟旅程不僅讓我對土耳其有了更多的了解，也讓我重新認識了食物的魔力。下一次再有機會，我一定會回到土耳其，再次品味這份獨一無二的沙威瑪風情。
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

export default TurkyTravel;
