import React from 'react'
import logo from '../../assets/images/logo.png'
import clases from './Logo.css'
import {Link} from 'react-router-dom';
import {Box} from '@mui/material'

const Logo = (props) => (
    <div className={props.class} >
        <Box component={Link} to='/'>
            <img src={logo} alt='Logo'/>
        </Box>
    </div>
    );
export default Logo;