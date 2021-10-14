import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import theme from '../../themeConfig'
import Drawer from '../../components/Navegation/Drawer/MiniDrawer'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import './AboutUS.css'
import TeamCard from '../../components/UI/TeamCard/TeamCard'
import ImgYoan from '../../assets/team/yoan.jpg'
import ImgAngel from '../../assets/team/angel.png'
import ImgDiane from '../../assets/team/diane.png'
import ImgEduardo from '../../assets/team/eduardo.jpg'


const aboutus = () => {
    return (
      <ThemeProvider theme={theme}>
        <Drawer>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h2" component="div" align="center">
              Sobre Nosotros
            </Typography>
            <hr className="title1" />
            <Typography
              variant="subtitle1"
              component="div"
              align="left"
              width="80%"
              margin="auto"
            >
              Id.uci.cu es una plataforma de datos abiertos y enlazados
              universitaria. La plataforma integra 7 conjuntos de datos en los
              que se encuentran datos geoespaciales, personal universitario,
              cursos impartidos, centros de produccón , consumo de servicios
              como agua y electricidad, eventos y publicaciones científicas.
              Este sitio es producto de la colaboración del grupo de
              investigación Web Semantica de la Universidad de las Ciencias
              Informáticas al liderazgo del Msc. Yoan Antonio López en
              colaboración con un grupo de estudiantes del centro de
              investigación de Web Semántica de la Universidad de las Ciencias
              Informáticas (UCI).
            </Typography>
            <Box mt={2}>
              <Card sx={{ display: "flex" }}>
                <CardMedia sx={{ width: 271 }} alt="tutor">
                  <Avatar
                    alt="Yoan"
                    src={ImgYoan}
                    sx={{ width: 150, height: 150, margin: "20px" }}
                  />
                </CardMedia>
                <Box sx={{ display: "flex", flexDirection: "column" }} ml={2}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Msc. Yoan Antonio López Rodríguez
                    </Typography>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <Stack direction="row" spacing={2}>
                        <Tooltip title="yalopez@uci.cu">
                          <IconButton>
                            <EmailIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="yalopez84">
                          <IconButton
                            sx={{ color: "#340E47" }}
                            href="https:/github.com/yalopez84"
                            target="_blank"
                          >
                            <GitHubIcon />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      mt={2}
                    >
                      Ingeniero de software complacido de trabajar en el
                      área de Web Semántica. También profesor en la
                      Universidad de Ciencias de la Informática (UCI). He
                      enseñado Matemáticas, Redes y Seguridad, Programación.
                      Actualmente, soy parte de un equipo que está inmerso en el desarrollo de
                      una plataforma de datos abiertos enlazados para la UCI.
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
            <Typography variant="h3" component="div" align="center" mt={4}>
              Equipo de Trabajo
            </Typography>
            <hr className="title2" />
            <Box
              sx={{
                maxWidth: "1200px",
                display: "flex",
                alingItem: "center",
                justifyContent: "space-evenly",
                gap: "1.5em",
                flexWrap: "wrap",
                marginTop: "8px",
              }}
            >
              <TeamCard
                img={ImgAngel}
                name="Angel Luis Valdés Sanchez"
                email="angelluis2605@gamil.com"
                github="alvaldes"
              />
              <TeamCard
                img={ImgDiane}
                name="Dianette Cardentey Chaple"
                email="dcardentey13@gamil.com"
                github="dcardentey"
              />
              <TeamCard
                img={ImgAngel}
                name="Pablo E. Arias Gonzáles"
                email="angelluis2605@gamil.com"
                github="pabloearias"
              />
              <TeamCard
                img={ImgAngel}
                name="Henry Pino Álvarez"
                email="angelluis2605@gamil.com"
                github="hlpino"
              />
              <TeamCard
                img={ImgAngel}
                name="Daniela Gutiérrez Capó"
                email="angelluis2605@gamil.com"
                github="dagutierre"
              />
              <TeamCard
                img={ImgAngel}
                name="Amanda Rivero García"
                email="angelluis2605@gamil.com"
                github="alvaldes"
              />
              <TeamCard
                img={ImgEduardo}
                name="Eduardo Sánchez Horta"
                email="angelluis2605@gamil.com"
                github="eshorta96"
              />
            </Box>
          </Box>
        </Drawer>
      </ThemeProvider>
    );
}

export default aboutus
