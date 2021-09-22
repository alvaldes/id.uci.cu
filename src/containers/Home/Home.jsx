import {ThemeProvider} from '@mui/material/styles'
import theme from '../../themeConfig'

import Navbar from '../../components/Navegation/Navbar/Navbar.jsx'
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material'


function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Typography 
        variant="h4" 
        gutterBottom component="div" 
        color = "primary.contrastText"
        mt={7}
        mb={0}
        sx={{ textAlign: 'center', fontWeight: 'light'}}>
        Our Job is to make the information
      </Typography>
      <Typography 
        variant="h6" 
        gutterBottom component="div" 
        color = "therty.main"
        sx={{ textAlign: 'center', fontWeight: 'medium'}}>
        more accessible to YOU
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button 
        href="/getdata"
        variant="outlined" 
        color="therty" 
        size="madium" 
        sx={{ px: 6 ,borderRadius: 5, border: 2 }}>
          Get Data
        </Button>
      </Box>
      </ThemeProvider>
    </div>
  );
}

export default Home;
  