import React from "react";
import Typography from '@mui/material/Typography';
import MiniDrawer from '../../components/Navegation/Drawer/MiniDrawer.jsx'


function Courses (){
    return(
        <MiniDrawer>
            <Typography variant='h3'>
                Cursos 
            </Typography>
        </MiniDrawer>
    );
}

export default Courses