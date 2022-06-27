import { Avatar } from '@mui/material'
import React from 'react'
import Img3 from './Img/3.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import './ChannelColumn.css';
import Img4 from './Img/ss.jpg'
const ChannelColumn = () => {
  return (
    <div className='channelColumn'>
      <img src={Img3} alt="videos" />
      <div className="channelColumn_text">
        <h2>Redux :redux Middle ware is launch to work with Asyc call</h2>
        <p>29k views * 11 day ago</p>
        <div className="channelColumn_text_1">
          <Avatar src ={Img4}/>
          <p>Redux Tech</p> 
           <CheckCircleIcon/> 
        </div>
        re:reskill in redux
      </div>
    </div>
  )
}

export default ChannelColumn