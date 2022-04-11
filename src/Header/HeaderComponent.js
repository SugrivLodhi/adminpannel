import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useStyles from './HeaderStyle';
import Nav from './Nav';
import { Messages } from './Messages';
import Notification from './Notification';
import { Avatar, Container, Grid, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Item from './MainContant/Item';

export default function HeaderComponent() {
    const classes = useStyles();
    
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>
          <Typography variant="" className={classes.logo}>
           {"Home"}
          </Typography>
          <Hidden smDown>
          <Box style={{display:'flex'}}>
          <Messages/>
          <Notification/>
           <Nav/>
        </Box>
        </Hidden>
        <Hidden mdUp>
        <IconButton>
         <MenuIcon/>
        </IconButton>
        </Hidden>
        </Toolbar>
      </AppBar>
      <Item/>
      </Box>
  );
}