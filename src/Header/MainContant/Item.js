import React from 'react'
import {Container, Grid,Typography } from '@mui/material';
import {Card, Button, CardMedia } from '@material-ui/core';
import useStyles from '../HeaderStyle';
const Item = () => {
   const classes = useStyles();
  return (
    <main>
      <div>
    <Container maxWidth = 'sm' >
    <Typography variant='h2'>About Me</Typography> 
            <Typography variant='h4' color='textSecondary' align='center' paragraph>
              My name is Sugriv Lodhi ,I am a Junior React js Developer work in Cimet .I am Currenty
              living in jaipur .
            </Typography>
         <Grid container spacing={2}>
            <Grid item>
             <Button color = 'secondary' variant='contained' >see More</Button>
           </Grid>
           <Grid item>
            <Button color = 'secondary' variant='contained'>See Less</Button> 
           </Grid>
            </Grid>  
      </Container>
      <Container>
        <Grid container maxWidth ="md" spacing={2} className ={classes.grid}>
         <Grid Item>
             <Card className ={classes.card}>
             <CardMedia
             className={classes.cardmedia}
             image='https://source.unplash.com/random'
             />
             </Card>
           </Grid>   
        </Grid>
      </Container>
      </div>
      </main>
      ) 
  }
  
export default Item

