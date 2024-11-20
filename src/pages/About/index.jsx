import "./index.css";
const About = () => {
  return (
    <>
      <section id="socialmedia"></section>
      <main id="about_main">
        <div className="aboutme">關於我</div>
        <div className="row">
          <div className="col-4">
            <img
              src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="col-8">
            <div className="describe_me">我誰</div>
            <div className="describe_myself">我的生平</div>
          </div>
        </div>
        <div className="join_btn">
          <button className="join">都看關於我了，還不訂閱嗎?</button>
        </div>
        <div className="underline">---我也是有底線的---</div>
      </main>
    </>
  );
};

export default About;
