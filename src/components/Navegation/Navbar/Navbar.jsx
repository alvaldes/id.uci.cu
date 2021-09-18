import React from 'react';
import './Navbar.css';
import { Button } from '@nextui-org/react';
import LogoImage from "../../../assets/logo.png";

const Navbar = () => {
    return (
        <header className="Navbar">
            <img src={LogoImage} alt="LOGO"></img>
            <div>Search</div>
            <nav>
                ...
            </nav>
            <Button size="small" flat color="#CF9314" animated >Login</Button>
        </header>
    )
}

export default Navbar
