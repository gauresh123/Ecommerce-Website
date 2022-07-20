import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartcount = useSelector((state)=> state.first.val);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" flexGrow={1} sx={{fontFamily:"fantasy"}}>
            ShopNow
          </Typography>
          <Button component={NavLink} to="/" sx={{color:"white"}}>Home</Button>
          <Button component={NavLink} to="/cart" sx={{color:"white"}}><img src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png' alt='' style={{width:"40px",height:"40px"}}></img><h2>{cartcount.length}</h2></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
  
}
