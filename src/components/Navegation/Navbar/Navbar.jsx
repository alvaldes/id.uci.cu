import React from 'react';
import './Navbar.css';

import {AppBar, Toolbar, Typography,Box, Button, Fab } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import {Menu, Fingerprint} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'

import { ButtonN } from '@nextui-org/react';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems'
import {Link} from 'react-router-dom';
import { display } from '@mui/system';



const Navbar = () => {
  const matches = useMediaQuery('(min-width:900px)');
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="Navbar"
          position="static"
          color="transparent"
          sx={{ boxShadow: 0 }}
        >
          <Toolbar sx={{
              display:'flex',
              justifyContent: 'space-between',
              overflow: 'hidden',
              flexWrap: 'wrap',
          }}>
            <Box>
              <Logo class="logoNavbar" />
            </Box>
            <Box
              mr={2}
              mt={3}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <NavigationItems />
            </Box>
            <Fab
              variant="extended"
              size="small"
              color="therty"
              sx={{ px: 4, py: 1, ml: 3, mt: 2 }}
              component={Link}
              to="/login"
            >
              {matches? "Iniciar Sesión": ""}
              <Fingerprint sx={{ ...(matches && {ml: 1}) }} />
            </Fab>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navbar
