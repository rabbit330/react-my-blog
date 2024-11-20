import "./index.css";

const AddPost = () => {
  return (
    <>
      <section id="socialmedia"></section>
      <div className="post">文章編輯</div>
      <main id="main">
        <div className="eddit_form_container">
          <form id="eddit_form" action="">
            <div className="group_container">
              <input id="post_title" type="text" placeholder="請輸入文章標題" />
            </div>
            <div className="time_group">
              <div className="group_container">
                <input id="time" type="datetime" placeholder="2024-11-11" />
                <button className="now">現在</button>
              </div>
            </div>
          </form>
        </div>
        <div className="btn_container">
          <button className="eddit_btn">+常用標籤</button>
          <button className="eddit_btn">#為地點標籤評分</button>
          <button className="eddit_btn">+推薦標籤</button>
          <button className="eddit_btn">@建議文章分類</button>
          <form id="add_lebal" action="">
            <textarea
              className="tag"
              defaultValue={"(已輸入0組，還可輸入20組)"}
            ></textarea>
          </form>
        </div>
        <div className="eddit_area">
          <ul id="eddit_menu" className="eddit_nav">
            <li className="eddit_item">
              <i className="fa-solid fa-arrow-rotate-left"></i>
            </li>
            <li className="eddit_item">
              <i className="fa-solid fa-arrow-rotate-right"></i>
            </li>
            <li className="eddit_item">
              <a href="#" className="eddit_link">
                格式
              </a>
            </li>
            <li className="eddit_item">
              <a href="#" className="eddit_link">
                預設字型
              </a>
            </li>
            <li className="eddit_item">
              <a href="#" className="eddit_link">
                字型
              </a>
            </li>
            <li className="eddit_item">
              <i className="fa-solid fa-underline"></i>
            </li>
            <li className="eddit_item">
              <i className="fa-solid fa-highlighter"></i>
            </li>
          </ul>
          <form id="input_eddit" action="" />
          <textarea
            className="write"
            defaultValue={"今天想寫些什麼..."}
          ></textarea>
        </div>
        <div className="post_btn">
          <button className="postbtn">儲存草稿</button>
          <button className="postbtn">發表文章</button>
        </div>
      </main>
      <section id="socialmedia">
        <ul id="social_container" className="nav">
          <li className="nav_item">
            <a href="#" className="nav_link">
              <i className="fa-brands fa-facebook-f"></i> facebook
            </a>
            <a href="#" className="nav_link">
              <i className="fa-brands fa-instagram"></i> instagram
            </a>
            <a href="#" className="nav_link">
              <i className="fa-brands fa-x-twitter"></i> twitter
            </a>
            <a href="#" className="nav_link">
              <i className="fa-brands fa-threads"></i> thread
            </a>
          </li>
        </ul>
        <div className="photo_line">
          <div className="selection">
            <div className="selection_link"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPost;
