import React,{useState} from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {IconButton,Badge,ListItemIcon, ListItem, ListItemText, Avatar, List, Menu, Box} from '@mui/material';
import useStyles from './HeaderStyle';

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes =useStyles()
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
           {label:'Medera' ,desc:'Medera working as empolyee'}
          ]
  return (
    <Box>
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
  <Menu 
   id="sample-notification"
   anchorEl={anchorEl}
   open={open}
   onClose={handleClose}>
   <List className={classes.navList}>
    {dropDowndata.map((item,i) =>(
      <ListItem key ={i} component={ListItem} onClick={handleClose}>
       <ListItemIcon><Avatar>{item.label[0].toUpperCase()}</Avatar></ListItemIcon> 
       <ListItemText primary ={item.label} secondary ={item.desc} ></ListItemText>
      </ListItem>
    ))}
   </List>
  </Menu>
  </Box>
 )
}

export default Notification