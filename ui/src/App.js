import './App.css';
import AddRemovePublication from './components/AddRemovePublication';
import './components/CheckoutPage'
import CheckoutPage from './components/CheckoutPage';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';

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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <CheckoutPage />
          <AddRemovePublication/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;