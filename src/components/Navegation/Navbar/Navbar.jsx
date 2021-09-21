import React from 'react';
import './Navbar.css';

import {AppBar, Toolbar, Typography,Box, Button} from '@mui/material'
import {Menu, Fingerprint} from '@mui/icons-material';

import { ButtonN } from '@nextui-org/react';
import LogoImage from "../../../assets/images/logo.png";
import IconButton from '@mui/material/IconButton'


const Navbar = () => {
    return (
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
                    <Menu/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                LOGO
                </Typography>
                <Button variant="outlined" color="inherit" endIcon={<Fingerprint />}>
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
