import { Icon } from '@mui/material'
import React from 'react'
import './SideBar.css'
const SideBarIcon = ({Icon,title,selected}) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className='sidebarIcon'/>
      <h1 className='sidebarTitle'>{title}</h1>
    </div>
  )
}

export default SideBarIcon