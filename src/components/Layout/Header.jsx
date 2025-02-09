import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
// import { useState } from "react";
import { message } from "antd";
import { useUserStore } from "@/store/user.js";

const languageList = {
  zh: "zh_TW",
  en: "en_US",
};

const Header = () => {
  const {
    language,
    setLanguage,
    darkMode,
    setDarkMode,
    token,
    username,
    logout,
  } = useUserStore();
  console.log(language);
  const navigate = useNavigate();
  const { t } = useTranslation();
  //const [language, setLanguage] = useState(languageList.zh);

  const toggleDarkMode = () => {
    const text = !darkMode ? "暗黑" : "明亮";
    message.success(`${text}模式`);
    setDarkMode(!darkMode);
  };

  //翻譯

  const changeLanguage = () => {
    const newLanguage =
      language === languageList.zh ? languageList.en : languageList.zh;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="header h-20 flex justify-around items-center bg-white">
      <img
        className="blog_name h-10"
        src="https://live.staticflickr.com/65535/54108673211_019dbdaaee.jpg"
        alt=""
      />
      <ul id="menu" className="nav flex text-black">
        <li className="nav_item mr-7">
          <Link to="/" className="nav_link hover:text-mainBlue">
            {t("home")}
          </Link>
        </li>
        <li className="nav_item mr-7">
          <Link to="about" className="nav_link hover:text-mainBlue">
            {t("about")}
          </Link>
        </li>
        <li className="nav_item ">
          <Link to="all" className="nav_link hover:text-mainBlue">
            {t("all")}
          </Link>
        </li>
      </ul>
      <div className="flex">
        {token && <p className="mr-2">Hi, {username}</p>}
        <ul className="icon__container flex">
          <Link to="add-post" className="icon_link mr-2 hover:text-mainBlue">
            <i className="fa-solid fa-pen"></i>
            {t("addit")}
          </Link>
          <li
            onClick={changeLanguage}
            className="icon_link cursor-pointer mr-2 hover:text-mainBlue"
          >
            <i className="fa-solid fa-earth-asia"></i> EN
          </li>
          <li
            href=""
            className="icon_link cursor-pointer mr-2 hover:text-mainBlue"
            onClick={toggleDarkMode}
          >
            <i
              className={`${darkMode ? "fa-solid" : "fa-regular"} fa-moon`}
            ></i>
          </li>
          {token ? (
            <button onClick={logout}>登出</button>
          ) : (
            <Link to="login" className="icon_link hover:text-mainBlue">
              <i className="fa-solid fa-arrow-right-to-bracket "></i>{" "}
              {t("login")}
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
