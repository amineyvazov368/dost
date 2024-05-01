// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { IoIosMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import React, { useState } from 'react';



function App() {
  const [darkMode, setDarkMode] = useState(true)



  return (
    <>
     

     <Box sx={{ flexGrow: 1, color:darkMode ? 'black':"white" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,flexGrow: 1, color:darkMode ? 'black':"white"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={()=>{
            setDarkMode(!darkMode);
            localStorage.setItem("darkMode",darkMode);
            document.body.style.background=darkMode ? "black" :"white";
          }} color="inherit">{darkMode ? <IoIosMoon /> : <FaSun /> }</Button>
      
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{color:darkMode ? "black" :"white",}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium veniam, eum ducimus doloribus enim eligendi quas. Eveniet alias excepturi et a rerum repudiandae autem. Nemo nobis, deserunt est dignissimos libero architecto, perspiciatis et obcaecati nostrum iure officia praesentium vero fugit animi harum eos minus nulla, assumenda expedita! Esse, assumenda?</div>
      
    </>
  )
}

export default App
