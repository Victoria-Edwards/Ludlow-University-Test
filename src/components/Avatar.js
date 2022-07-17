import React from "react";

const Avatar = () => {
  return (
    <div className="avatarContainer d-flex flex-column">
      <div className="tweetHeader d-flex flex-row">
        <img
          src="assets/tweet-avatar.png"
          alt="avatar"
          className="avatar"
          loading="lazy"
        />
        <div className="tweetName d-block">
          <p>Ludlow University</p>
          <p>@lulowuni</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
