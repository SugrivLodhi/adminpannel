import { Avatar, Button } from '@mui/material'
import React from 'react' 
import './ChannelRow.css'
import Img4 from './Img/ss.jpg'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const ChannelRow = () => {
  return (
    <div className='channelRow'>
      <Avatar src={Img4}/>
      <div className="channelRow_text">
        <h1>Aws Wormup</h1>
        <p>148k subscriber * 124 videos</p>
        <p>Hello Every one ,I am Teching all about Aws .</p>
       <p> You can learn the Aws from my channel from scrath</p>
      </div> 
     <div className='subscribers'>
      <Button>Subscribed</Button>
      <NotificationsActiveIcon className='notifiy'/> 
     </div> 
    </div>
  )
}

export default ChannelRow