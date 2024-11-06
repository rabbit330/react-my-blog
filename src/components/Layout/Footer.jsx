const Footer = () => {
  return (
    <footer id="myself">
      <div className="foot_container">
        <img
          src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="about_me">
          <h1>About me</h1>
          <p className="para">還在思考</p>
          <p className="para">我的故鄉在遠方~</p>
          <p>Read More</p>
        </div>
        <form id="form" action="">
          <div className="input_group">
            <h1 className="Join">Join My Mailing</h1>
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
            <span className="policy">
              Yes, subscribe me to your newsletter.
            </span>
          </div>
          <button className="btn">Subscribe Now</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
