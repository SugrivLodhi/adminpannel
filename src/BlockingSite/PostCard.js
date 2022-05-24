import { CardActionArea, CardContent, Typography,Card,Grid,} from '@material-ui/core'
import React from 'react'

const PostCard = ({post}) => {
  return (
       <Grid item xs={12} md ={6}>
    <CardActionArea>
      <Card>
        <CardContent>
         <Typography variant='h4'>{post.title}</Typography>
         <Typography variant='subtitle1'>{post.date}</Typography>
         <Typography variant='h6'>{post.description}</Typography>
         <Typography>continue reading...</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
    </Grid> 
  )
}

export default PostCard
