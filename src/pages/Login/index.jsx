import "./index.css";
const Login = () => {
  return (
    <main className="login_main">
      <div className="box">
        <form id="box_form" action="">
          <div className="input_group">
            <label className="input_group_email" htmlFor="email">
              使用者帳號
            </label>
            <input
              id="login_email"
              type="email"
              placeholder="eclairnear345@gmail.com"
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
