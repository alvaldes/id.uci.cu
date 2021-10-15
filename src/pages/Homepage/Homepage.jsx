import React, {Component} from 'react'
import {ThemeProvider} from '@mui/material/styles'
import theme from '../../themeConfig'
import classes from './Homepage.css'

import Navbar from '../../components/Navegation/Navbar/Navbar.jsx'
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material'
import {Link} from 'react-router-dom';


function Homepage(props) {
    return (
      <div className="fondo" style={{ height:props.height }}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Typography 
          variant="h4" 
          gutterBottom component="div" 
          color = "primary.contrastText"
          mt={7}
          mb={0}
          sx={{ textAlign: 'center', fontWeight: 'light'}}>
          Nuestro trabajo es hacer que la información
        </Typography>
        <Typography 
          variant="h6" 
          gutterBottom component="div" 
          color = "therty.main"
          sx={{ textAlign: 'center', fontWeight: 'medium'}}>
          sea más accesible para Tí
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button 
          component={Link} to="/getdata"
          variant="outlined" 
          color="therty" 
          size="madium" 
          sx={{ px: 6 ,borderRadius: 5, border: 2 }}>
            Obtener Datos
          </Button>
        </Box>
        </ThemeProvider>
      </div>
    );
  }

export default Homepage;
  