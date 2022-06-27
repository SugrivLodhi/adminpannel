import React, { useState } from "react";
import {Link} from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./Img/youtube.png";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import { Avatar } from "@mui/material";
import Img4 from './Img/ss.jpg'
import "./Header.css";
const Header = () => {
  const [inputSearch,setSearch] = useState("")
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to ='/'>
        <img src={logo} className="header_logo" />
        </Link>
       </div>
      <div className="header_input">
        <input type=" text" value={inputSearch} onChange ={e => setSearch(e.target.value)}  placeholder="Search"/>
        <Link to ={`/searchPage/${inputSearch}`}>
        <SearchIcon className="header_searchIcon" />
        </Link>
      
      </div>
      <div className="header_right">
        <VideoCallIcon  className="header_icon"/>
        <AppsIcon className="header_icon" />
        <AddAlertIcon className="header_icon"/>
        <Avatar src={Img4} />
      </div>
    </div>
  );
};

export default Header;
