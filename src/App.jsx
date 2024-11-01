import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEarthAsia,
  faMoon,
  faArrowRightToBracket,
  faUser,
  faEye,
  faComment,
  faHeart,
  faFacebookF,
  faInstagram,
  faXTwitter,
  faThreads,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <img
          className="blog_name"
          src="https://live.staticflickr.com/65535/54108673211_019dbdaaee.jpg"
          alt=""
        />
        <ul id="menu" className="nav">
          <li className="nav_item">
            <a href="#" className="nav_link">
              首頁
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              關於我
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              旅行
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              美食
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              放鬆
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              影片
            </a>
          </li>
        </ul>
        <div className="icon__container">
          <a href="" className="icon_link">
            <FontAwesomeIcon icon={faPen} />
            發表文章
          </a>
          <a href="" className="icon_link">
            <FontAwesomeIcon icon={faEarthAsia} /> EN
          </a>
          <a href="" className="icon_link">
            <FontAwesomeIcon icon={faMoon} />
          </a>
          <a href="" className="icon_link">
            <FontAwesomeIcon icon={faArrowRightToBracket} /> 登入
          </a>
        </div>
      </header>
      <section id="banner">
        <div className="banner_container">
          <p className="banner_stittle">Travel Blog</p>
          <h1 className="banner_tittle">Going Places</h1>
          <p className="banner_para">
            I haven’t been everywhere, but it’s on my list
          </p>
        </div>
      </section>
      <section id="paragraph">
        <div className="paragraph_container">
          <div className="post-container">
            <div className="row">
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://i0.wp.com/huitinchou.tw/wp-content/uploads/2020/09/20200910082303_86.jpg"
                    alt=""
                  />
                  <h1 className="post-link">Travel</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg"
                    alt=""
                  />
                  <h1 className="post-link">Eat</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://scontent.frmq3-1.fna.fbcdn.net/v/t39.30808-6/209924931_4304154672975922_8583083328128074987_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oGMRl8fLZysQ7kNvgHG8peJ&_nc_zt=23&_nc_ht=scontent.frmq3-1.fna&_nc_gid=AJLklsYxZI3H0HdZbC6f0WB&oh=00_AYBovkIzoZ5UxLJSO8F6g2lzJS-Q4fTK4P4IMEqbTpyn6w&oe=672A5C92"
                    alt=""
                  />
                  <h1 className="post-link">Relax</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://images.pexels.com/photos/4790579/pexels-photo-4790579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <h1 className="post-link">Spiritual</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://life-tree.org.tw/wp-content/uploads/2021/12/biblestudy-2.jpg"
                    alt=""
                  />
                  <h1 className="post-link">Essay</h1>
                </div>
              </div>
              <div className="col-4">
                <div className="post-card">
                  <img
                    className="post-image"
                    src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/70c6daa0-8474-459c-b3b9-a85f8775c4be.jpg"
                    alt=""
                  />
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
                <hr />
                旅遊Travel
                <hr />
                美食Eat
                <hr />
                放鬆Relax
                <hr />
                心靈Spiritual
                <hr />
                札記Essay
                <hr />
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
                        <FontAwesomeIcon icon={faUser} />
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
                    <p className="coment_text">
                      在湖邊的小木屋，夜晚的魔法似乎格外迷人。這是一個如詩如畫的地方，小木屋坐落在蔚藍的湖畔，周圍被綠意盎然的樹林環繞。夕陽西下，湖面上散發出金黃色的光輝，與小木屋的輪廓交相輝映，形成一幅令人心醉的畫面。
                    </p>
                    <p className="coment_text">
                      當夜幕降臨，湖面變成了一面巨大的鏡子，小木屋的倒影在湖水中輕輕搖曳，彷彿是一幅動人的油畫。微風拂過，湖面泛起微微的波紋，倒影隨之起伏，使得這片寧靜的天地多了一份動感的美麗。
                    </p>
                  </div>
                  <hr />
                  <div className="text_icon">
                    <div className="view">
                      <a href="" className="text_link">
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                      <span className="viel">0</span>
                      <a href="" className="text_link">
                        <FontAwesomeIcon icon={faComment} />
                      </a>
                      <span className="viel">0</span>
                    </div>
                    <div className="heart">
                      <span className="viel">10</span>
                      <a href="" className="text_link">
                        <FontAwesomeIcon icon={faHeart} />
                      </a>
                    </div>
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
              <FontAwesomeIcon icon={faFacebookF} /> facebook
            </a>
            <a href="#" className="nav_link">
              <FontAwesomeIcon icon={faInstagram} /> instagram
            </a>
            <a href="#" className="nav_link">
              <FontAwesomeIcon icon={faXTwitter} /> twitter
            </a>
            <a href="#" className="nav_link">
              <FontAwesomeIcon icon={faThreads} /> thread
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
          <img
            src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="about_me">
            <h1>About me</h1>
            <p className="para">還在思考</p>
            <p className="para">我的故鄉在遠方~</p>
            <p>Read More</p>
          </div>
          <form id="form" action="">
            <div className="input_group">
              <h1 className="Join">Join My Mailing</h1>
              <label className="input_title" for="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="eclairbear345@gmail.com"
              />
            </div>
            <div className="checkbox_container">
              <label className="input_check">
                <input type="checked={true}" />
                <i className="fa-solid fa-check"></i>
              </label>
              <span className="policy">
                Yes, subscribe me to your newsletter.
              </span>
            </div>
            <button className="btn">Subscribe Now</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default App;
