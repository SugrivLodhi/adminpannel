import React,{useState} from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {IconButton,Badge,ListItemIcon, ListItem, ListItemText, Avatar, List} from '@mui/material'
const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dropDowndata =[
           {label:'Alex',desc:' Alex working as empolyee'},
           {label:'Federa',desc:'Federa hedera working as empolyee'},
           {label:'Hedera' ,desc:'Hedera working as empolyee'},
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
      <Badge badgeContent={4} color="secondary">
           <NotificationsActiveIcon/>
        </Badge>
      </IconButton>
  <List
   id="sample-notification"
   anchorEl={anchorEl}
   open={open}
   onClose={handleClose}>
    {dropDowndata.map((item,i) =>(
      <ListItem key ={i} component={ListItem} onClick={handleClose}>
       <ListItemIcon><Avatar>{item.label[0].toUpperCase()}</Avatar></ListItemIcon> 
       <ListItemText>{item.label}</ListItemText>
       <ListItemText>{item.desc}</ListItemText>
      </ListItem>
    ))}
  
  </List>
    </>
  )
}

export default Notification