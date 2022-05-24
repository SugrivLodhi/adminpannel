import React from 'react'
import { Divider, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles';
import SideNavBar from './SideNavBar';
const useStyle =makeStyles((theme) =>({
    toolbar:{
        flexGrow:1
    },
    taglLine :{
         fontSize:'22px',
         fontFamily :'roboto',
           textTransform :'uppercase',
         justifyContent:'center',
    }

}))
const Header = () => {
    const classes =useStyle(); 
  return (
    <>
    <Toolbar>
      <SideNavBar>
       <IconButton>
         <MenuIcon/>
       </IconButton>
       </SideNavBar>
       <Typography variant='h6' className={classes.toolbar}>Blocking Website</Typography>
       <IconButton>
       <Badge badgeContent={4} color="primary">
      <NotificationsIcon color="action" />
    </Badge>
       </IconButton>
       <IconButton>
       <AccountCircleIcon/>
       </IconButton>
    </Toolbar>
    <Divider/>
    <Typography className={classes.taglLine}>Express your Emotion Through the Words</Typography>
    </>
  )
}

export default Header
 