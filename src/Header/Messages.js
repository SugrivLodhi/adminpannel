import React,{useState} from 'react'
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import {IconButton,Menu,MenuItem ,Badge,ListItemIcon, ListItem, ListItemText, Avatar, List} from '@mui/material'
export const Messages = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dropDowndata =[
           {label:'Alex'},
           {label:'Federa'},
           {label:'Hedera'},
          ]
  return (
    <>
    <IconButton
    id="simple-notification"
    aria-controls="simple-notification"
    aria-haspopup="true"
    color='inherit'
    onClick={handleClick}
    >
    <Badge badgeContent={3} color="secondary">
         <MailOutlineSharpIcon/>
      </Badge>
    </IconButton>
<List
 id="sample-notification"
 anchorEl={anchorEl}
 open={open}
 onClose={handleClose}>
  {dropDowndata.map((item,i) =>(
    <ListItem key ={i} component={ListItem} onClick={handleClose}>
     <ListItemIcon><Avatar>{item.label[0].toUpperCase()}</Avatar>{item.label}</ListItemIcon> 
    </ListItem>
  ))}

</List>
    </>
  )
}
