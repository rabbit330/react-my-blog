import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Post9 = () => {
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
                <h1>京阪8天7夜：在櫻花盛開的大阪城感受春日浪漫</h1>
                <img
                  className="photo"
                  src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800"
                />
                <div experience_container>
                  <p className="experience">
                    這次的京都大阪8天7夜之旅，第四天的行程讓我印象最深刻。那天，我來到大阪城，巧遇櫻花盛開的季節，春天的美好在這裡達到了極致。
                    一早，我搭乘地鐵來到大阪城公園站，沿著公園小徑慢慢步行至大阪城。還沒進入城內，周圍的櫻花樹已經展現出令人驚嘆的美景。粉白的櫻花如雲般覆蓋整片樹梢，在和煦的陽光下閃閃發光，微風輕拂，花瓣如細雪般飄落，讓整個公園彷彿置身童話世界。
                  </p>
                  <p className="experience_1">
                    站在大阪城外抬頭仰望，城郭在藍天和櫻花的映襯下顯得更加壯麗與雅致。這座擁有400多年歷史的城堡，是豐臣秀吉時代的重要象徵，白色的牆面與金箔裝飾的屋頂，彰顯著其歷史與文化價值。
                    我漫步於櫻花林間，穿過櫻花隧道，來到內城附近的護城河邊。河水靜靜流淌，櫻花倒映其中，形成了一幅如詩如畫的景象。我不禁駐足許久，拍下這讓人屏息的畫面。這樣的景色，讓人深刻感受到春天的生命力與自然的美好。
                  </p>
                  <p className="experience">
                    大阪城公園內聚集了許多賞花的人們，隨處可見舉家出遊的居民和三五成群的朋友。他們在樹下鋪上野餐墊，享用便當和甜點，彼此暢談笑語，洋溢著歡樂的氣氛。
                    我也買了一盒便利店的壽司便當，隨意找了一個位置坐下，靜靜地感受櫻花的美。當微風攜著櫻花香飄來時，那一刻的愜意讓我忘卻了旅途的疲憊，只有滿滿的感恩與幸福。
                  </p>
                  <p className="experience">
                    午後，我登上了大阪城的天守閣，從高處俯瞰整片櫻花林和城市景觀。站在頂樓的瞭望台上，感覺整個大阪的春天都盡收眼底。櫻花的粉色海洋與遠處的高樓大廈形成強烈對比，既展現了自然的柔美，也凸顯了城市的活力。
                    天守閣內的歷史展覽也非常有趣，詳細介紹了豐臣秀吉建造大阪城的歷程，還有日本戰國時代的故事。這讓我在欣賞美景的同時，也對大阪城背後的歷史有了更深的了解。
                  </p>
                  <p className="experience">
                    結束大阪城的行程後，我走在回程的路上，櫻花樹依然在微風中搖曳，似乎在向我告別。這一天，不僅讓我見證了櫻花的壯麗，還深深體會到日本人對自然的珍視，以及花見文化中那份純粹的喜悅與共鳴。
                    這次大阪城之旅，讓我深刻感受到旅行的意義不僅在於到訪名勝古蹟，更在於體驗當地的風土人情，感受自然與文化交織的美好。櫻花雖短暫，但留給我的回憶，將長存於心。
                  </p>
                </div>
                <div className="hashtag">#京阪 #櫻花 #大阪城</div>
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
                  <div className="travel">#旅行</div>
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

export default Post9;
