import { Typography } from '@mui/material'
import React from 'react'
import useStyles from '../HeaderStyle'
const Footer = () => {
    const classes =useStyles()
  return (
    <div>
       <footer className={classes.footer} >
          <Typography variant='h6' align='center' gutterBottom>
              Footer
          </Typography>
          <Typography  variant='h6' align='center'>
           this is a footer which represent the copyright rule.
          </Typography>
       </footer>
    </div>
  )
}

export default Footer
