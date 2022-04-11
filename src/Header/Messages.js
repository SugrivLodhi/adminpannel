import React,{useState} from 'react'
import MessageIcon from '@mui/icons-material/Message';
import useStyles from './HeaderStyle';
import {IconButton,Menu,MenuItem ,Badge,ListItemIcon, ListItem, ListItemText, Avatar, List, Box} from '@mui/material'
export const Messages = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dropDowndata =[
           {label:'Alex' ,desc:' Alex working as empolyee'},
           {label:'Federa', desc:'Federa hedera working as empolyee' },
           {label:'Hedera', desc:'Hedera working as empolyee'},
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
    <Badge badgeContent={3} color="secondary">
         <MessageIcon/>
      </Badge>
    </IconButton>
<Menu
 id="sample-notification"
 anchorEl={anchorEl}
 open={open}
 onClose={handleClose}>
 <List className={classes.navList} >
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
