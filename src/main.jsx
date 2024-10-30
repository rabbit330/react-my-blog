import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // 導入專案的根組件
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

createRoot(document.getElementById("root")).render();

export default function html() {
  return (
    <div classNameName="wrapper">
    <header classNameName="header">
      <img classNameName="blog_name" src="./assets/image/blogname2.jpeg" alt="" />
      <ul id="menu" className="nav">
        <li className="nav_item">
          <a href="#" className="nav_link">首頁</a>
        </li>
        <li class="nav_item">
          <a href="#" className="nav_link">關於我</a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">旅行</a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">美食</a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">放鬆</a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">影片</a>
        </li>
      </ul>
      <div className="icon__container">
        <a href="" className="icon_link">
          <i className="fa-solid fa-pen"></i> 發表文章
        </a>
        <a href="" className="icon_link">
          <i className="fa-solid fa-earth-americas"></i> EN
        </a>
        <a href="" className="icon_link">
          <i className="fa-solid fa-moon"></i>
        </a>
        <a href="" className="icon_link">
          <i className="fa-solid fa-arrow-right-to-bracket"></i> 登入
        </a>
      </div>
    </header>
    <section id="banner">
      <div className="banner_container">
        <p className="banner_stittle">Travel Blog</p>
        <h1 className="banner_tittle">Going Places</h1>
        <p className="banner_para">I haven’t been everywhere, but it’s on my list</p>
      </div>
    </section>
    <section id="paragraph">
      <div className="paragraph_container">
        </div>
        <div className="post-container">
          <div className="row">
            <div className="col-4">
              <div className="post-card">
                <img className="post-image" src="./assets/image/travel.webp" alt="" />
                <h1 className="post-link">Travel</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="post-card">
                <img className="post-image" src="./assets/image/eat.webp" alt="" />
                <h1 className="post-link">Eat</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="post-card">
                <img className="post-image" src="./assets/image/relax.jpeg" alt="" />
                <h1 className="post-link">Relax</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="post-card">
                <img className="post-image" src="./assets/image/spiritual.jpg" alt="" />
                <h1 className="post-link">Spiritual</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="post-card">
                <img className="post-image" src="./assets/image/essay.jpg" alt="" />
                <h1 className="post-link">Essay</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="post-card">
                <img className="post-image" src="./assets/image/work.jpg" alt="" />
                <h1 className="post-link">work</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="gray"></section>
    <main id="main">
      <div className="main-container">
        <div className="row">
        <div className="col-2">
          <div className="aside">
            <a>文章分類</a>
            <hr>
            旅遊Travel
            <hr>
            美食Eat
            <hr>
            放鬆Relax
            <hr>
            心靈Spiritual
            <hr>
            札記Essay
            <hr>
            工作work
            </div>
          </div>
        <div className="col-10">
          <div className="container">
            <div className="picture"></div>
            <div className="coment_container">
              <div className="line1">
                <div className="user">
                  <a href="" className="user_link">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </div>
                <div className="user_imfor">
                  <div className="name">Connie</div>
                  <span className="time">Sep 1,2024</span>
                  <span className="time">· 2 min</span>
                </div>
              </div>
              <div className="coment">
                <h1 className="coment_tittle">湖邊棕色小木屋</h1>
                <p className="coment_text">在湖邊的小木屋，夜晚的魔法似乎格外迷人。這是一個如詩如畫的地方，小木屋坐落在蔚藍的湖畔，周圍被綠意盎然的樹林環繞。夕陽西下，湖面上散發出金黃色的光輝，與小木屋的輪廓交相輝映，形成一幅令人心醉的畫面。</p>
                <p className="coment_text">當夜幕降臨，湖面變成了一面巨大的鏡子，小木屋的倒影在湖水中輕輕搖曳，彷彿是一幅動人的油畫。微風拂過，湖面泛起微微的波紋，倒影隨之起伏，使得這片寧靜的天地多了一份動感的美麗。</p>
              </div>
              <hr />
              <div className="text_icon">
                <div className="view">
                  <a href="" className="text_link">
                    <i className="fa-regular fa-eye"></i>
                  </a>
                  <span className="viel">0</span>
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
        </div>
      </div>
    </main>
    <section id="socialmedia">
      <ul id="social_container" className="nav">
        <li className="nav_item">
          <a href="#" className="nav_link">
            <i className="fa-brands fa-facebook-f"></i>  facebook
          </a>
          <a href="#" className="nav_link">
            <i className="fa-brands fa-instagram"></i>  instagram
          </a>
          <a href="#" className="nav_link">
            <i className="fa-brands fa-x-twitter"></i>  twitter
          </a>
          <a href="#" className="nav_link">
            <i className="fa-brands fa-threads"></i>  thread
          </a>
        </li>
      </ul>
      <div className="photo_line">
        <div className="selection">
          <div className="selection_link"></div>
        </div>
      </div>
    </section>
    <footer id="myself">
      <div className="foot_container">
        <img src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="about_me">
          <h1>About me</h1>
          <p className="para">還在思考</p>
          <p className="para">我的故鄉在遠方~</p>
          <p>Read More</p>
        </div>
        <form id="form" action="">
          <div className="input_group">
            <h1 className="Join">Join My Mailing</h1>
            <label className="input_title" for="email">Email</label>
            <input id="email" type="email" placeholder="eclairbear345@gmail.com" />
          </div>
          <div className="checkbox_container">
            <label className="input_check">
              <input type="checkbox" />
              <i className="fa-solid fa-check"></i>
            </label>
            <span className="policy">Yes, subscribe me to your newsletter.</span>
          </div>
          <button className="btn">Subscribe Now</button>
        </form>
      </div>
    </footer>
  </div>
  );
};