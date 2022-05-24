
import BloakApp from './BlockingSite/BloakApp';
import './App.css'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { Container } from '@material-ui/core';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return ( 
        <ThemeProvider theme={darkTheme}>
          <Container>
          <BloakApp/>
          </Container>
       </ThemeProvider>
   
  );
}

export default App;
