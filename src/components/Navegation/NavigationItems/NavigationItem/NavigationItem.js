import React from 'react';
import {Typography} from '@mui/material'

import Link from '@mui/material/Link';
import classes from './NavigationItem.css';


const navigationItem = ( props ) => (
    <li className='NavigationItem'>
        <Link href={props.link}  
        color="therty.main"
        underline="none">
        <Typography 
        variant="subtitle2" 
        component="div"
        sx={{fontWeight: 'medium', color: props.active ? 'therty.light' : 'therty.main'}}>
                {props.children}
            </Typography></Link>


        {/* <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a> */}
    </li>
);

export default navigationItem;