import './App.css';
import AddPublication from './components/AddPublication';
import './components/CheckoutPage'
import CheckoutPage from './components/CheckoutPage';
import { createTheme, ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';
import FindPublication from './components/FindPublication';
import Registration from './components/Registration';
import Return from './components/Return';
import MainPage from './components/MainPage'
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // palette values for dark mode
    primary: deepOrange,
    divider: deepOrange[700],
    text: {
      primary: '#D0D0D0',
      secondary: grey[500],
    },
  },
});

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const tabs = [(<MainPage/>), (<CheckoutPage />), (<AddPublication/>), (<FindPublication/>), (<Return/>), (<Registration/>)];
  
  const handleTabChange = (event) => {
    setCurrentPage(parseInt(event.target.id.substring(2)));
  }

  const toolbar = [<Typography key={0} id='tb0' variant="h5" component="div" sx={{ flexGrow: 1 }} onClick={handleTabChange}> DataBASED </Typography>,
                    <Button key={1} id='tb1'  color="inherit" onClick={handleTabChange}> Checkout </Button>,
                    <Button key={2} id='tb2' color="inherit" onClick={handleTabChange}> Add </Button>,
                    <Button key={3} id='tb3' color="inherit" onClick={handleTabChange}> Find/Delete </Button>,
                    <Button key={4} id='tb4' color="inherit" onClick={handleTabChange}> Return </Button>,
                    <Button key={5} id='tb5' color="inherit" onClick={handleTabChange}> Register </Button>];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                {toolbar}
              </Toolbar>
            </AppBar>
          </Box>
        </header>
        {tabs[currentPage]}
      </div>
    </ThemeProvider>
  );
}

export default App;
