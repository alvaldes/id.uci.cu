import React from 'react'
import './Modal.css'

import { Box } from '@mui/material'
import ModalLabel from './ModalLabel/ModalLabel'

import { Check, Close } from '@mui/icons-material'

const Modal = (theme) => {
    return (
        <Box class="Aggregate">
            <Box
                class="Modal"
                bgcolor='red'
            >
                <Box class="ModalItem">
                    <label class="Label"> Nombre: </label>
                    <input class="Input"></input>
                </Box>
                <Box class="ModalItem">
                    <label class="Label"> Nombre: </label>
                    <input class="Input" ></input>
                </Box>
                <Box class="ModalItem">
                    <label class="Label"> Nombre: </label>
                    <input class="Input"
                    ></input>
                </Box>
                <Box class="ModalButtons">
                    <button class="Button ButtonSuccess Divider">
                        <Check />
                    </button>
                    <button class="Button ButtonDanger">
                        <Close />
                    </button>
                </Box>
            </Box>
        </Box>
    );
}

export default Modal