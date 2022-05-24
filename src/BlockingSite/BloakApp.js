import React from 'react'
import FeaturePost from './FeaturePost'
import Header from './Header'
import PostCard from './PostCard'
import { featuredPosts } from './Data'
import Main from './Main'
import SideBar from './SideBar'
import { Grid } from '@material-ui/core'
const BloakApp = () => {
  return (
    <>
    <Header/>
    <FeaturePost/>
    <br/>
    <Grid container spacing={4}>
     {
      featuredPosts.map((post) =>{
        return(
          <PostCard  post ={post} key = {post.title}/>
        )
     }) 
     }
    </Grid>
    <Grid container spacing={5}>
      <Main data ="From the Firehose"/>
      <SideBar/>
    </Grid>
    
    </>
  )

}

export default BloakApp
