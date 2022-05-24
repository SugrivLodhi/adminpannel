import { Accordion } from '@mui/material';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import useStyles from '../HeaderStyle';
const AccordionsBtn = () => {
  const classes = useStyles();
  const accrdsArr = [1,2,3,4,5,6,7,8,9]
  return (
      <div className={classes.accord}>
      {accrdsArr.map((num) =>{
        return (
          <Accordion key={num} style={{textAlign:'center'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography marginLeft={50}>Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        )
      })}
     
      
    </div>
  )
}

export default AccordionsBtn