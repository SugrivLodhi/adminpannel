import React from 'react'
import './Search.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import ChannelColumn from './ChannelColumn';
const Search = () => {
  return (
    <div className='search_page'>
    <div className="filter_page">
    <TuneIcon/>
    <h1>FILTER</h1>
    </div>
    <hr/>
     <ChannelRow/>
     <hr/> 
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
     <ChannelColumn/>
    </div>
  )
}

export default Search