import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
// import { useState } from "react";
import { useUserStore } from "@/store/user";

const languageList = {
  zh: "zh_TW",
  en: "en_US",
};

const Header = () => {
  const { language, setLanguage } = useUserStore();
  console.log(language);
  const navigate = useNavigate();
  const { t } = useTranslation();
  //const [language, setLanguage] = useState(languageList.zh);

  //翻譯

  const changeLanguage = () => {
    const newLanguage =
      language === languageList.zh ? languageList.en : languageList.zh;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

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
            {t("home")}
          </Link>
        </li>
        <li className="nav_item">
          <Link to="about" className="nav_link">
            {t("about")}
          </Link>
        </li>
        <li className="nav_item">
          <Link to="all" className="nav_link">
            {t("all")}
          </Link>
        </li>
      </ul>
      <ul className="icon__container flex">
        <Link to="add-post" className="icon_link">
          <i className="fa-solid fa-pen"></i>
          {t("eddit")}
        </Link>
        <li onClick={changeLanguage} className="icon_link cursor-pointer">
          <i className="fa-solid fa-earth-asia"></i> EN
        </li>
        <li href="" className="icon_link">
          <i className="fa-solid fa-moon"></i>
        </li>
        <li href="" className="icon_link">
          <i className="fa-solid fa-arrow-right-to-bracket"></i> {t("login")}
        </li>
      </ul>
    </header>
  );
};

export default Header;
