const NotFound = () => {
  return (
    <div class="box">
      <form id="form" action="">
        <div class="input_group">
          <label class="input_title" for="email">
            使用者帳號
          </label>
          <input
            id="email"
            type="email"
            placeholder="eclairnear345@gmail.com"
          />
        </div>
        <div class="input_group">
          <label class="input_title" for="password">
            密碼
          </label>
          <div class="input_group_container">
            <input id="password" type="password" placeholder="8+ characters" />
          </div>
        </div>
        <div class="btn_container">
          <button class="btn">登入</button>
        </div>
      </form>
    </div>
  );
};

export default NotFound;
