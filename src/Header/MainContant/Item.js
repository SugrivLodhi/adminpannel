import React,{useState} from 'react'
import {CardActions, CardContent, collapseClasses, Container, Grid,Typography } from '@mui/material';
import {Card, Button, CardMedia ,Box} from '@material-ui/core';
import useStyles from '../HeaderStyle';
import Img from './nature.jpg';
const Item = () => {
   const classes = useStyles();
    const gridArr =[1,2,3,4,5,6,7,8,9,10,11,12]
    const [showeMore,setShowMore] = useState(false)
    const onChange =() =>{
      setShowMore(true)
    }
    const onChanges =()=>{
        setShowMore(false)
    }
  return (
    <main>
      <div>
    <Container maxWidth = 'sm' className={classes.container}>
    <Typography variant='h2'>About Me</Typography> 
            <Typography variant='h4' color='textSecondary' align='center' paragraph>
              My name is Sugriv Lodhi ,I am a Junior React js Developer work in Cimet .I am Currenty
              living in jaipur .
            </Typography>
         <Grid container spacing={2}>
            <Grid item>
             <Button color = 'secondary' variant='contained' onClick={onChange} >see More</Button>
           </Grid>
           <Grid item>
            <Button color = 'secondary' variant='contained' onClick={onChanges} >See Less</Button> 
           </Grid>
            </Grid> 
            {showeMore===true && (
              <Typography variant='h6'>
               We are creating Avesome webside using Different technology
               if You are Interested then Pink me Email:sugrivmlvt@gmail.com.
               Our team is availbe all time to handle our request 
              </Typography>
            )} 
      </Container>
      <Container className ={classes.cardGrid} maxWidth ="md" >
        <Grid container spacing={4}>
          {gridArr.map((card)=>{
            return(
              <Grid Item key={card} xs={12} sm={6} md ={4}>
              <Card className ={classes.card}>
              <CardMedia
              className={classes.cardMedia}
                image ={Img}
              title ='image title'
              />
              <CardContent className={collapseClasses.cardContent}>
                <Typography variant='h5' gutterBottom>
                This image is show only for representation purpose
                </Typography>
               <Typography>
                 this is an Image 
               </Typography>
              </CardContent>
              <CardActions>
                <Button color='primary' variant='contained'>View</Button>
                <Button color='primary' variant='contained'>Edit</Button>
              </CardActions>
              </Card>
            </Grid>
            )
          })}
           </Grid>
      </Container>
      </div>
      </main>
      ) 
  }
  
export default Item

