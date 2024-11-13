import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useState } from "react";

const languageList = {
  zh: "zh_TW",
  en: "en_US",
};
const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [language, setLanguage] = useState(languageList.zh);

  //翻譯
  const changeLanguage = () => {
    const newLanguage =
      language === languageList.zh ? languageList.en : languageList.zh;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <footer id="myself">
      <div className="foot_container">
        <img
          src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="about_me">
          <h1>{t("about")}</h1>
          <p className="para">還在思考</p>
          <p className="para">我的故鄉在遠方~</p>
          <p>{t("read_more")}</p>
        </div>
        <form id="form" action="">
          <div className="input_group">
            <h1 className="Join">{t("join")}</h1>
            <label className="input_title" htmlFor="email">
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
            <span className="policy">{t("agree")}</span>
          </div>
          <button className="btn">{t("subscribe")}</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
