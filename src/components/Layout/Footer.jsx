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
    <footer id="myself" className="myself bg-mainGray h-[300px] items-center">
      <div className="foot_container py-10 w-3/5 flex justify-around mx-auto">
        <img
          className="w-[140px] h-[140px]"
          src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="about_me text-white text-[24px]">
          <h1 className="pb-6">{t("about")}</h1>
          <p className="para text-[15px] pb-[15px]">還在思考</p>
          <p className="para text-[15px] pb-[15px]">我的故鄉在遠方~</p>
          <p>{t("read_more")}</p>
        </div>
        <form id="form" className="" action="">
          <div className="input_group flex flex-col text-left">
            <h1 className="Join text-[24px] text-white pb-[24px]">
              {t("join")}
            </h1>
            <label
              className="input_title text-[15px] text-white mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="text-[#c9cacf] text-xs"
              id="email"
              type="email"
              placeholder="eclairbear345@gmail.com"
            />
          </div>
          <div className="checkbox_container flex p-[10px]">
            <label className="input_check hidden relative w-4 h-4	border-t-[1px] border-solid divide-white mr-3 translate-y-[-50%] translate-x-[-50%] text-white">
              <input type="checked={true} checked: inline" />
              <i className="fa-solid fa-check absolute inset-y-1/2 scale-0"></i>
            </label>
            <span className="policy">{t("agree")}</span>
          </div>
          <button className="btn w-[284px] border-t-[1px] border-solid border-[#2573DA] p-4 bg-[#2573DA]">
            {t("subscribe")}
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
