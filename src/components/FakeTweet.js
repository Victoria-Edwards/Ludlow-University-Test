import React from "react";
import "../styles/fakeTweet.scss";
import Avatar from "./Avatar";
import Message from "./Message";

const FakeTweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <Message />
    </div>
  );
};

export default FakeTweet;
