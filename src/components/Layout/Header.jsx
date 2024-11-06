import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img
        className="blog_name"
        src="https://live.staticflickr.com/65535/54108673211_019dbdaaee.jpg"
        alt=""
      />
      <ul id="menu" className="nav">
        <li className="nav_item">
          <Link to="/" className="nav_link">
            首頁
          </Link>
        </li>
        <li className="nav_item">
          <Link to="about" className="nav_link">
            關於我
          </Link>
        </li>
        <li className="nav_item">
          <Link to="blogs" className="nav_link">
            所有文章
          </Link>
        </li>
      </ul>
      <ul className="icon__container flex">
        <Link to="eddit-post" className="icon_link">
          <i class="fa-solid fa-pen"></i>
          發表文章
        </Link>
        <li
          onClick={() => navigate("/add-post")}
          className="icon_link cursor-pointer"
        >
          <i class="fa-solid fa-earth-asia"></i> EN
        </li>
        <li href="" className="icon_link">
          <i class="fa-solid fa-moon"></i>
        </li>
        <li href="" className="icon_link">
          <i class="fa-solid fa-arrow-right-to-bracket"></i> 登入
        </li>
      </ul>
    </header>
  );
};

export default Header;
