import { Avatar } from "@mui/material";
import React from "react";
import Img1 from './Img/1.png'
import Img2 from './Img/ss.jpg'
import './Video.css'
const Video = () => {
  return (
    <div className="videoCard">
      <img src={Img1} alt="imgae"  className="videocard_thumbnail"/>
      <div className="video_info">
        <Avatar src={Img2}  className="video_avtar"/>
        <div className="video_text">
          <h4>how to learn Aws</h4>
          <p>Aws Wormup</p>
          <p>
            1M view * 1 year ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
