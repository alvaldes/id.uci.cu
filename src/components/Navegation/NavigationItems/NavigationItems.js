import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" active>
            Home
        </NavigationItem>
        <NavigationItem link="/map">
            Map
        </NavigationItem>
        <NavigationItem link="/datasets">
            Datasets
        </NavigationItem>
        <NavigationItem link="/about">
            AboutUS
        </NavigationItem>
        {/* <NavigationItem link="/map">Map</NavigationItem> */}
    </ul>
);

export default navigationItems;