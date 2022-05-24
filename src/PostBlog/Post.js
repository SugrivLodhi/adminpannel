import { Box } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Box bgcolor="blue" flex={3} p={2} sx={{display:{ xs:"none", sm :"block"}}} >
      Post
    </Box>
  )
}

export default Post
