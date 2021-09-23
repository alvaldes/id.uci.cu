import React from 'react'
import logo from '../../assets/images/logo.png'
import clases from './Logo.css'

const Logo = (props) => (
    <div className={props.class}>
            <img src={logo} alt='Logo' />
        </div>
    );
export default Logo;