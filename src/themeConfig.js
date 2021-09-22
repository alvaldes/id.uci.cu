import {createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
          light: '#4c5481',
          main: '#202A62',
          dark: '#161d44',
          contrastText: '#fff',
        },
        secondary: {
          light: '#d8a843',
          main: '#CF9314',
          dark: '#90660e',
          contrastText: '#000',
        },
        therty: {
          light: '#fff',
          main: '#A3A8CB',
          dark: '#89878C',
          contrastText: '#fff',
        },
    },
})

export default theme;