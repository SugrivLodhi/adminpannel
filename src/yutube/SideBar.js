import React from 'react'
import './SideBar.css'
import SideBarIcon from './SideBarIcon';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideBar = () => {
  return (
      <div className='sidebar'>
    <SideBarIcon selected Icon ={HomeIcon } title ="Home"/>
    <SideBarIcon Icon ={WhatshotIcon} title ="Trending"/>
    <SideBarIcon Icon ={SubscriptionsIcon} title ="Subsription"/>
    <hr/>
    <SideBarIcon Icon ={VideoLibraryIcon} title ="Library"/>
    <SideBarIcon Icon ={HistoryIcon} title ="Histry"/>
    <SideBarIcon Icon ={OndemandVideoIcon} title ="Your videos"/>
    <SideBarIcon Icon ={WatchLaterIcon} title ="Watch Latter"/>
    <SideBarIcon Icon ={ThumbUpAltIcon} title ="Like Video"/>
    <SideBarIcon Icon ={ExpandMoreIcon} title ="Expand More"/>
    <hr/>
    </div> 
  )
}

export default SideBar