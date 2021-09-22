import React from 'react';
import './Navbar.css';

import {AppBar, Toolbar, Typography,Box, Button} from '@mui/material'
import {Menu, Fingerprint} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'

import { ButtonN } from '@nextui-org/react';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems'



const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='Navbar' position="static" color='transparent' sx={{boxShadow:0}}>
            <Toolbar>
                <Logo class='logoNavbar'/>
                {/* <IconButton 
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Menu color='therty'/>
                </IconButton> */}
                <Box mr={2} sx={{flexGrow: 1, display: 'flex', flexDirection: 'row-reverse' }}>
                    
                    <NavigationItems/>
                </Box>
                <Button variant="outlined" color="therty" endIcon={<Fingerprint />}>
                Login
                </Button>
            </Toolbar>
            </AppBar>
        </Box>

        /* 
        <header className="Navbar">
            <img src={LogoImage} alt="LOGO"></img>
            <div>Search</div>
            <nav>
                ...
            </nav>
            <Button size="small" flat color="#CF9314" animated >Login</Button>
        </header>
        */
        
    )
}

export default Navbar
