import React from 'react'
import './Modal.css'

import { Box } from '@mui/material'
import ModalLabel from './ModalLabel/ModalLabel'

import { Check, Close } from '@mui/icons-material'

const Modal = () => {
    return (
        <Box className="Aggregate" sx={{backgroundColor:'#202A62'}}>
            <Box className="Modal" bgcolor= 'red'>
                <Box className="ModalItem">
                    <label className="Label"> Nombre: </label>
                    <input className="Input"></input>
                </Box>
                <Box className="ModalItem">
                    <label className="Label"> Nombre: </label>
                    <input className="Input" ></input>
                </Box>
                <Box className="ModalItem">
                    <label className="Label"> Nombre: </label>
                    <input className="Input"
                    ></input>
                </Box>
                <Box className="ModalButtons">
                    <button className="Button ButtonSuccess Divider">
                        <Check />
                    </button>
                    <button className="Button ButtonDanger">
                        <Close />
                    </button>
                </Box>
            </Box>
        </Box>
    );
}

export default Modal