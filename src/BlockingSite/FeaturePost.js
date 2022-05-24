import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    cover : {
        backgroundImage:`url(https://picsum.photos/seed/picsum/1366/768)`,
        backgroundPosition:'center',
       backgroundSize:'cover',
        padding:'35px 25px',
     },
     title : {
       fontSize: 40 , 
     },
     btn : {
      color:'white',
      backgroundColor:'white',
      '&:hover':{
          backgroundColor:'blue',
      },

     }
}));
const FeaturePost = () => {
    const classes= useStyles();
    console.log('classe is working',classes);
  return (
    <Card className={classes.cover}>
     <CardContent>
      <Typography className={classes.title} gutterBottom>Title of Longer Feature Block Post</Typography>
      <Typography variant='h5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Sint laboriosam dolorum fugit 
      tempore illo voluptates? Dicta voluptates minus cumque dolore.</Typography>
     </CardContent>
     <CardActions>
       <Button variant='contained' color='primary'>read more...</Button>
     </CardActions>
    </Card>
  )
}

export default FeaturePost
