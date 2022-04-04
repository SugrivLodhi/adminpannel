import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Nav from './Nav';
import { Messages } from './Messages';
import Notification from './Notification';

const useStyles = makeStyles((theme) => ({
      logo:{
        color :"white"
      },
      toolbar :{
          display:'flex',
          justifyContent:'space-between',
          flexFlow:'row-wrap',
      }
  }));
export default function HeaderComponent() {
    const classes = useStyles();
    
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="" className={classes.logo}>
           { "<AdminPannel/>"}
          </Typography>
          <Box>
          <Messages/>
          <Notification/>
           <Nav/>
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}