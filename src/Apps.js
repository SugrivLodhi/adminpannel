import React from 'react'
import './App.css'
import SideNavBar from './BlockingSite/SideNavBar'
import NavBar from './PostBlog/NavBar'
import Post from './PostBlog/Post'
import SideNabar from './PostBlog/SideNabar'
import { Box } from '@material-ui/core'
import {Stack } from '@mui/material'
import Feed from './PostBlog/Feed'
const Apps = () => {
  return (
    <Box>
    <NavBar/> 
    <Stack direction="row" spacing ={2} justifyContent="space-between">
    <Feed/>
    <Post/>
    <SideNabar/>
    </Stack>
    </Box>
  )
}

export default Apps
