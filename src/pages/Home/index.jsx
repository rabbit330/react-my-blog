import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
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
              <div className="aside border border-solid border-gray-400 shadow-primary w-40 h-[280px]">
                <a>文章分類</a>
                <ul>
                  <li className="border-b border-solid border-gray-400">
                    旅遊Travel
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    美食Eat
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    放鬆Relax
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    心靈Spiritual
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    札記Essay
                  </li>
                  <li className="border-b border-solid border-gray-400">
                    工作work
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-10">
              <div className="container">
                <div className="picture"></div>
                <div className="coment_container">
                  <div className="line1">
                    <div className="user">
                      <a href="" className="user_link">
                        <i class="fa-solid fa-user"></i>
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
                        <i class="fa-regular fa-eye"></i>
                      </a>
                      <span className="viel">0</span>
                      <a href="" className="text_link">
                        <i class="fa-regular fa-comment"></i>
                      </a>
                      <span className="viel">0</span>
                    </div>
                    <div className="heart">
                      <span className="viel">10</span>
                      <a href="" className="text_link">
                        <i class="fa-solid fa-heart"></i>
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
              <i class="fa-brands fa-facebook-f"></i> facebook
            </a>
            <a href="#" className="nav_link">
              <i class="fa-brands fa-instagram"></i> instagram
            </a>
            <a href="#" className="nav_link">
              <i class="fa-brands fa-x-twitter"></i> twitter
            </a>
            <a href="#" className="nav_link">
              <i class="fa-brands fa-threads"></i> thread
            </a>
          </li>
        </ul>
        <div classNameName="photo_line">
          <div className="selection">
            <div className="selection_link"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
