import React from "react";
import MiniDrawer from '../../components/Navegation/Drawer/MiniDrawer.jsx'
import Card from '../../components/UI/DataCard/DataCard'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {ThemeProvider} from '@mui/material/styles'
import theme from '../../themeConfig'


//importar las imagenes
import img1 from '../../assets/images/fondo.png'

function Catalogue  (){
return(
  <ThemeProvider theme={theme}>
  <MiniDrawer>
    <Typography 
    variant='h3' 
    align='center' 
    mb={2} 
    sx={{ fontWeight: 'bold'}} 
    >CATÁLOGO</Typography>
    <Box sx={{ justifyContent: 'center', backgroundColor: 'primary', my:'30px' }}> </Box>

    <Grid sx={{ flexGrow: 1 }} justifyContent="center" container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'Consumo'
          ruta = '/consumption'
          title='Consumo' 
          description='Esta es una descripcion'/>
      </Grid>    
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'Cursos'
          ruta='/courses'
          title='Cursos' 
          description='Esta es una descripcion'/>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'Lugares'
          ruta = '/places'
          title='Lugares' 
          description='Esta es una descripcion'/>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'Producción'
          title='Producción' 
          ruta = '/production'
          description='Esta es una descripcion'/>   
      </Grid>   
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'Profesores'
          title='Profesores' 
          ruta = '/professors'
          description='Esta es una descripcion'/>   
      </Grid> 
      <Grid item xs={4} sm={4} md={4}>
        <Card 
          picture= {img1}
          alt = 'Publicaciones'
          title='Publicaciones' 
          ruta = '/publications'
          description='Esta es una descripcion'/>   
      </Grid>
    </Grid>
  </MiniDrawer>
  </ThemeProvider>    
);
}

export default Catalogue