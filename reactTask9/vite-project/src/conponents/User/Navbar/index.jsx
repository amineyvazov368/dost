import React from 'react'
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


const index = () => {
  return (
<>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit"><Link to={'/myproduct'}> myproduct</Link></Button>
          <Button color="inherit"><Link to={'/basket'}> basket</Link></Button>
          <Button color="inherit" > <Link to={'/productdetail'}> productdetail</Link></Button>
          <Button color="inherit" > <Link to={'/wishlist'}> wishlist</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

</>
  )
}

export default index