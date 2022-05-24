import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useStyles from '../HeaderStyle';
import { Messages } from '../Messages';
import Notification from '../Notification';
import { Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from '../Nav';
 function Admin() {
    const classes = useStyles();
      const iconHandler = () =>{
        console.log('click me')
      }
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>
          <Typography variant="" className={classes.logo}>
           {"Home"}
          </Typography>
          <Hidden mdDown>
          <Box style={{display:'flex'}}>
          <Messages/>
          <Notification/>
           <Nav/>
        </Box>
        </Hidden>
        <Hidden mdUp>
        <IconButton>
         <MenuIcon  onClick ={iconHandler} />
        </IconButton>
        </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Admin