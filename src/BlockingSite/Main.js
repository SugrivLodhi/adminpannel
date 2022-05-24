import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'

import { posts } from './Data'
const Main = ({data}) => {
  return (
    <Grid item xs= {8} sm ={4} > 
     <Typography>{data}</Typography>
     <Divider/>
    {posts.map((post) =>{
        return (
            <Markdown key ={post.body}>
              {post.body}
            </Markdown>
        )
    })}
    </Grid>
  )
}

export default Main
