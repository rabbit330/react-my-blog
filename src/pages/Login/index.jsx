import "./index.css";
import { useEffect, useState } from "react";
import { userApi } from "@/api/user.js";
import { useUserStore } from "@/store/user";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

//前端會將帳密給後端 => 後端將帳密在資料庫檢查 => Ok --> 傳給前端字串(token)
//前端拿到token存放在前端的瀏覽器上 => 登入成功
//登入核心 => 有沒有token

const Login = () => {
  const navigate = useNavigate();
  const { token, setToken, setUsername } = useUserStore();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    if (!account || !password) {
      message.warning("請輸入有效的使用者名稱或密碼");
      return;
    }
    try {
      const { accessToken, firstName } = await userApi.login(account, password);
      setToken(accessToken);
      setUsername(firstName);
      message.success(`登入成功`);
      navigate("/");
    } catch (e) {
      console.error(e);
      message.error("使用者名稱或密碼錯誤");
    }
  };
  useEffect(() => {
    if (token) {
      //若已登入(有token)，使用者無法進入登入頁面
      navigate("/");
    }
  });
  return (
    <main className="login_main">
      <div className="box">
        <form id="box_form" onSubmit={login}>
          <div className="input_group">
            <label className="input_group_email" htmlFor="email">
              使用者帳號
            </label>
            <input
              id="login_email"
              type="text"
              placeholder="請輸入使用者名稱"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>
          <div className="input_group">
            <label className="input_password" htmlFor="password">
              密碼
            </label>
            <div className="input_group_password">
              <input
                id="password"
                type="password"
                placeholder="8+ characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="login_btn">登入</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
