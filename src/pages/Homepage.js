import React from "react";

import { ThemeProvider } from '@mui/material/styles'
import theme from '../themeConfig'

import Navbar from '../components/Navegation/Navbar/Navbar.jsx'

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <h1>Aqui debajo va la informacion</h1>
                    <p>Y el btn Get Data</p>
                </ThemeProvider>
            </div>
        );
    }
}

export default Homepage