const WrightComment = () => {
  return (
    <div className="comment_container">
      <div className="eddit">Comments</div>
      <textarea className="eddit_below">Write a comment...</textarea>
      <div className="eddit_below">
        <div className="tool_container">
          <a href="" className="tool_link">
            <i className="fa-solid fa-face-smile"></i>
          </a>
          <a href="" className="tool_link">
            <i className="fa-solid fa-camera"></i>
          </a>
          <a href="" className="tool_link">
            <i className="fa-solid fa-video"></i>
          </a>
        </div>
      </div>
      <div className="cancel_container">
        <p className="member">Log in to publish as a member</p>
        <div>
          <button className="cancel">Cancel</button>
          <button className="publish">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default WrightComment;
