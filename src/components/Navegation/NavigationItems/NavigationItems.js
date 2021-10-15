import React from 'react';
import './NavigationItems.css';
import Typography from '@mui/material/Typography';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>
      Inicio
    </NavigationItem>
    <NavigationItem link="/places">Mapa</NavigationItem>
    <NavigationItem link="/catalogue">Catálogo</NavigationItem>
    <NavigationItem link="/about_us">Sobre Nosotros</NavigationItem>
    {/* <NavigationItem link="/map">Map</NavigationItem> */}
  </ul>
);

export default navigationItems;