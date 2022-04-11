import React,{useState} from 'react'
import {IconButton,Button,Menu,MenuItem ,Badge,ListItemIcon, ListItem, ListItemText, Avatar} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import image from './ss.jpg'
const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropDowndata =[
         {label:'setting',icon:<SettingsIcon/>},
         {label:'loggout',icon:<LogoutIcon/>}
        ]
  return (
      <>
    <Button
    id="simple-menu"
    aria-controls="simple-menu"
    aria-haspopup="true"
    color='inherit'
    onClick={handleClick}
    startIcon ={<Avatar src={image}></Avatar>}>
    </Button>
<Menu
 id="sample-menu"
 anchorEl={anchorEl}
 open={open}
 onClose={handleClose}>
  {dropDowndata.map((item,i) =>(
    <MenuItem key ={i} component={ListItem} onClick={handleClose}>
     <ListItemIcon>{item.icon}</ListItemIcon> 
     <ListItemText>{item.label}</ListItemText>
    </MenuItem>
  ))}

</Menu>
</>
  )
}
export default Nav
