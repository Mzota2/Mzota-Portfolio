import React from 'react'
import './Loader.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loader({displayClass}) {
  return (
    <div className={`p-loader`}>
      <Box>
        <CircularProgress color='success' />
      </Box>
      
    </div>
   
  );
}

export default Loader