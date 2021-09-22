import React from "react";
import theme from '../../themeConfig.js'
import classes from './NotFound.css'
import {ThemeProvider} from '@mui/material/styles'


import {
    Typography 
    }
from '@mui/material';

function NotFound(props) {
    return (
        <div className="centrar fondoNot" style={{ height: props.height }}>
        <div>
        <ThemeProvider theme={theme} >
        <Typography 
        variant="h1" 
        component="div" 
        color = "primary.contrastText"
        sx={{ textAlign: 'center', fontWeight: 'bold'}}>
        404
        </Typography>
        
        <Typography 
        variant="h5" 
        component="div" 
        color = "therty.main"
        sx={{ textAlign: 'center', fontWeight: 'bold'}}>
        PAGE NOT FOUND
        </Typography>                
        </ThemeProvider>
        </div>
        </div>
    );
}

export default NotFound;