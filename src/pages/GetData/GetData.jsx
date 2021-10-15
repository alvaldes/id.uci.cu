import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import theme from '../../themeConfig'
import Drawer from '../../components/Navegation/Drawer/MiniDrawer'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import '../AboutUS/AboutUS.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SimCardDownloadRoundedIcon from '@mui/icons-material/SimCardDownloadRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

const getdata = () => {
    return (
      <ThemeProvider theme={theme}>
        <Drawer>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h2" component="div" align="center">
              Obtener Datos
            </Typography>
            <hr className="title1" />
            <Typography
              variant="subtitle1"
              component="div"
              align="left"
              width="80%"
              margin="auto"
            >
              Id.uci.cu es una plataforma que, además de vincular los datos de
              los 7 Datasets con los que cuenta, también ofrece la posibilidad
              de descargar los datos. Se accede a la página de{" "}
              <Link underline="hover" to="/catalogue">Catálogo</Link> donde se encuentran los
              conjuntos de datos en los formatos de descarga disponible. Para
              obtenerlos se hace clic en el botón del formato en que se desea
              descargar una vez accedido al Dataset.
            </Typography>
            <Typography
              variant="h6"
              component="div"
              align="center"
              color="therty.dark"
              width="80%"
              margin="auto"
            >
              Con Id.uci.cu se puede obtener los datos abiertos y enlazados con
              tan solo hacer un clic.
            </Typography>
            <Typography variant="h4" component="div" align="center" mt={5}>
              Formatos Disponibles
            </Typography>
            <hr className="title2" />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              mt={2}
            >
              <Chip
                label="JSON-LD"
                size="50px"
                color="info"
                icon={<SimCardDownloadRoundedIcon />}
              />
              <Chip
                label="TURTLE"
                color="info"
                icon={<SimCardDownloadRoundedIcon />}
              />
              <Chip
                label="N3"
                color="info"
                icon={<SimCardDownloadRoundedIcon />}
              />
              <Chip
                label="CSV"
                color="info"
                icon={<SimCardDownloadRoundedIcon />}
              />
              <Chip
                label="SPARQL"
                variant="outlined"
                color="info"
                icon={<BorderColorRoundedIcon />}
              />
            </Stack>
          </Box>
        </Drawer>
      </ThemeProvider>
    );
}

export default getdata