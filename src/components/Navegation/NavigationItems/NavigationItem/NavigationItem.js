import React from 'react';
import {Typography} from '@mui/material'

import Link from '@mui/material/Link';
import classes from './NavigationItem.css';
import LinkR from 'react-router-dom/Link';


const navigationItem = (props) => (
  <Link
    className="NavigationItem"
    component={LinkR}
    to={props.link}
    color="therty.main"
    underline="none"
    marginLeft= '25px'
  >
    <Typography
      variant="subtitle2"
      component="div"
      sx={{
        fontWeight: "medium",
        color: props.active ? "therty.light" : "therty.main",
      }}
    >
      {props.children}
    </Typography>
  </Link>
);

export default navigationItem;