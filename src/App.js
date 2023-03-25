import './App.css';
import Nav from './Components/Nav';
import Box from "@mui/material/Box";
import { Container } from "@mui/material"
import Sidebar from './Components/Sidebar'
import { Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import Rightbar from './Components/Rightbar';
import Content from './Components/Content';



function App() {

  return (

    <Box component="span">
      <Nav />
      <Container >
        <Grid container spacing={3} p={5}>
          <Grid item md={3}  >
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={6} >
            <Content />
          </Grid>
          <Grid item md={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
}

export default App;

