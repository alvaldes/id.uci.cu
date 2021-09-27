import React from "react";
import MiniDrawer from '../../components/Navegation/Drawer/MiniDrawer.jsx'
import Card from '../../components/UI/DataCard/DataCard'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//importar las imagenes
import img1 from '../../assets/images/fondo.png'

function Catalogue  (){
return(
  <MiniDrawer>
    <Typography 
    variant='h3' 
    align='center' 
    mb={2} 
    sx={{ fontWeight: 'bold'}} 
    >DATASETS</Typography>

    <Grid sx={{ flexGrow: 1 }} justifyContent="center" container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'prueba'
          title='Prueba de Título' 
          description='Esta es una descripcion'/>
      </Grid>    
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'prueba'
          title='Prueba de Título' 
          description='Esta es una descripcion'/>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'prueba'
          title='Prueba de Título' 
          description='Esta es una descripcion'/>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'prueba'
          title='Prueba de Título' 
          description='Esta es una descripcion'/>   
      </Grid>    
    </Grid>
  </MiniDrawer>    
);
}

export default Catalogue