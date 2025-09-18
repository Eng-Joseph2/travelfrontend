import React, { useState } from "react";
import VideoHeaderStyle from "./VideoHeader.module.css";
import VideoImage from "../../../../Assets/play-button.png";

const VideoHeader = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlay = () => {
    setPlayVideo(true);
  };

  return (
    <div className={VideoHeaderStyle.Container}>
      <div className={VideoHeaderStyle.Outer} onClick={handlePlay}>
        <div className={VideoHeaderStyle.Inner}>
          <img src={VideoImage} alt="Play Button" />
        </div>
      </div>
      <h2>Watch Video</h2>

      {playVideo && (
        <div className={VideoHeaderStyle.VideoWrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/B9VRvOKKwfs?si=Q9UD9BuVEeEhIvtX"
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoHeader;
