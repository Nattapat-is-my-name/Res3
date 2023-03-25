import './App.css';
import Nav from './Components/Nav';
import Box from "@mui/material/Box";
import { Container } from "@mui/material"
import Sidebar from './Components/Sidebar'
import { Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import Rightbar from './Components/Rightbar';
import Content from './Components/Content';

// const theme = useTheme();
// const matches = useMediaQuery(theme.breakpoints.up('sm'));

function App() {

  return (

    <Box>
      <Nav />
      <Grid container spacing={3} pt={10}>
        <Grid item md={3} >
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container sx={{ p: 3 }} >
            <Content></Content>
          </Container>
        </Grid>
        <Grid item md={3}>
          <Rightbar></Rightbar>
        </Grid>
      </Grid>
    </Box>

  );
}

export default App;
