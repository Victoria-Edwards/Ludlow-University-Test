import React from "react";

const Message = () => {
  return (
    <div className="message">
      <p>
        Ludlow university students enjoying a selfie after the 2019
        #campuspaintrun. A total of £4913.14 was raised for multiple charities.
        #runformoney.
      </p>
      <p>11:44 AM · Jul 10, 2019</p>
      <ul className="d-flex shareIcons">
        <li>
          <a href="reply">
            <span className="bi bi-chat"></span>
          </a>
        </li>
        <li>
          <a href="retweet">
            <span className="bi bi-crop"></span>
          </a>
        </li>
        <li>
          <a href="like">
            <span className="bi bi-heart"></span>
          </a>
        </li>
        <li>
          <a href="share">
            <span className="bi bi-box-arrow-up-right"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Message;
