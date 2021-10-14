import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import RoomIcon from '@mui/icons-material/Room';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import {  ThemeProvider } from '@mui/material/styles';
import theme from '../../../themeConfig';
import Logo from '../../Logo/Logo';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import MapIcon from '@mui/icons-material/Map';
import LaptopIcon from '@mui/icons-material/Laptop';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import {Fab} from '@mui/material'
import {Fingerprint} from '@mui/icons-material';
import {Link,useLocation} from 'react-router-dom';
import Catalogue from '../../../pages/Catalogue/Catalogue';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

const preventDefault = (event) => event.preventDefault();
//grid de los iconos del final del nav bar
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//ancho de la barra izquierda
const drawerWidth = 240;
//abrir el menu
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#202A62',
  color: '#A3A8CB',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#202A62',
  color: '#A3A8CB',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#202A62',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: '#202A62',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    //  background: '#202A62',
    
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

// Metodos del Search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '40px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function MiniDrawer(props) {
// Para que se quede seleccionado el listButton de la  pagina donde se esta
const location = useLocation();

  // const theme = useTheme(); no activar jamas o pierde el tema
//inverti esto pa que quedara abierto x default 
  const [open, setOpen] = React.useState(true);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const [openB, setOpenB] = React.useState(true);
 const handleClickB = () => {
    setOpenB(!openB);
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="therty"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            
            <IconButton 
              color="therty"
              onClick={handleDrawerClose}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(!open && { display: "none" }),
              }}
              >
              <ChevronLeftIcon color="therty" />
            </IconButton>

            {/* /**********   AQUI COMIENZA TU TOOLBAR    ************/}
            {/* <Typography Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UCId
            </Typography> */}
            <Box sx={{ flexGrow: 1 }}>
              <Logo class="logoDrawer" />
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase />
            </Search>

            {/* <Button variant= 'contained' color='therty' sx={{mr:2}} borderRadius='90%' >
            Login
            </Button>
            <AccountCircleIcon/> */}
            <Fab
              variant="extended"
              size="small"
              color="therty"
              sx={{ px: 4 }}
              component={Link}
              to="/login"
            >
              Login
              <Fingerprint sx={{ ml: 1 }} />
            </Fab>
            </Toolbar>
            {/* /**********   Y AKI TERMINA **********/}
        </AppBar>
        <Drawer variant="permanent" open={open} className="cajon">
          
          <List sx={{ width: "100%", maxWidth: 360 }} onClick={preventDefault}>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon
                  color={"/" === location.pathname ? "secondary" : "therty"}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={"/" === location.pathname ? "secondary" : "therty"}
                >
                  Inicio
                </Typography>
              </ListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton component={Link} to="/places">
              <ListItemIcon>
                <RoomIcon
                  color={
                    "/places" === location.pathname ? "secondary" : "therty"
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={
                    "/places" === location.pathname ? "secondary" : "therty"
                  }
                >
                  Mapa
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="/catalogue">
              <ListItemIcon>
                <LibraryBooksIcon
                  color={
                    "/catalogue" === location.pathname ? "secondary" : "therty"
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={
                    "/catalogue" === location.pathname ? "secondary" : "therty"
                  }
                >
                  Catálogo
                </Typography>
              </ListItemText>
            </ListItemButton>

            {/* Lista anidada */}
            <ListItemButton
              onClick={handleClickB}
              sx={{ ":hover": { backgroundColor: "primary.light" } }}
            >
              <ListItemIcon color="therty">
                <CreateIcon color="therty" />
              </ListItemIcon>
              <ListItemText color="therty">Gestionar</ListItemText>
              {openB ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openB} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{ typography: "& > :not(style) + :not(style)" }}
              >
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/consumption"
                >
                  <ListItemIcon>
                    <ElectricalServicesIcon
                      color={
                        "/consumption" === location.pathname
                          ? "secondary"
                          : "therty"
                      }
                    />
                  </ListItemIcon>
                  <Typography
                    color={
                      "/consumption" === location.pathname
                        ? "secondary"
                        : "therty"
                    }
                  >
                    <ListItemText primary="Consumo" />
                  </Typography>
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }} component={Link} to="/courses">
                  <ListItemIcon>
                    <MenuBookIcon
                      color={
                        "/courses" === location.pathname ? "secondary" : "therty"
                      }
                    />
                  </ListItemIcon>
                  <Typography
                    color={
                      "/courses" === location.pathname ? "secondary" : "therty"
                    }
                  >
                    <ListItemText primary="Cursos" />
                  </Typography>
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }} component={Link} to="/places">
                  <ListItemIcon>
                    <MapIcon
                      color={
                        "/places" === location.pathname ? "secondary" : "therty"
                      }
                    />
                  </ListItemIcon>
                  <Typography
                    color={
                      "/places" === location.pathname ? "secondary" : "therty"
                    }
                  >
                    <ListItemText primary="Lugares" />
                  </Typography>
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/production"
                >
                  <ListItemIcon>
                    <LaptopIcon
                      color={
                        "/production" === location.pathname
                          ? "secondary"
                          : "therty"
                      }
                    />
                  </ListItemIcon>
                  <Typography
                    color={
                      "/production" === location.pathname
                        ? "secondary"
                        : "therty"
                    }
                  >
                    <ListItemText primary="Produccion" />
                  </Typography>
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/professors"
                >
                  <ListItemIcon>
                    <PersonIcon
                      color={
                        "/professors" === location.pathname
                          ? "secondary"
                          : "therty"
                      }
                    />
                  </ListItemIcon>
                  <Typography
                    color={
                      "/professors" === location.pathname
                        ? "secondary"
                        : "therty"
                    }
                  >
                    <ListItemText primary="Profesores" />
                  </Typography>
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/publications"
                >
                  <ListItemIcon>
                    <ArticleIcon
                      color={
                        "/publications" === location.pathname
                          ? "secondary"
                          : "therty"
                      }
                    />
                  </ListItemIcon>
                  <Typography
                    color={
                      "/publications" === location.pathname
                        ? "secondary"
                        : "therty"
                    }
                  >
                    <ListItemText primary="Publicaciones" />
                  </Typography>
                </ListItemButton>
              </List>
            </Collapse>

            {/* fin de lista anidada */}
            <ListItemButton component={Link} to="/getdata">
              <ListItemIcon>
                <DownloadRoundedIcon
                  color={
                    "/getdata" === location.pathname ? "secondary" : "therty"
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={
                    "/getdata" === location.pathname ? "secondary" : "therty"
                  }
                >
                  Obtener Datos
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="/about_us">
              <ListItemIcon>
                <InfoIcon
                  color={
                    "/about_us" === location.pathname ? "secondary" : "therty"
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={
                    "/about_us" === location.pathname ? "secondary" : "therty"
                  }
                >
                  Sobre Nosotros
                </Typography>
              </ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
        {/* AQUI EMPIEZA EL CONTENEDOR */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {props.children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
