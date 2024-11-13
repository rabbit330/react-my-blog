const NotFound = () => {
  return (
    <div className="box">
      <form id="form" action="">
        <div className="input_group">
          <label className="input_title" for="email">
            使用者帳號
          </label>
          <input
            id="email"
            type="email"
            placeholder="eclairnear345@gmail.com"
          />
        </div>
        <div className="input_group">
          <label className="input_title" for="password">
            密碼
          </label>
          <div className="input_group_container">
            <input id="password" type="password" placeholder="8+ characters" />
          </div>
        </div>
        <div className="btn_container">
          <button className="btn">登入</button>
        </div>
      </form>
    </div>
  );
};

export default NotFound;
