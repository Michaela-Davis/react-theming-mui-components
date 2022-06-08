import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import designTokens from './design-tokens.json'

const theme = createTheme({
  palette: {
    primary: {
      main: '#037c6e',
      light: '#28a99e',
      dark: '#025043',
      contrastText: '#fff',
    },
    secondary: {
      main: designTokens.color.mainPurple,
      light: designTokens.color.lightPurple,
      dark: designTokens.color.darkPurple,
    },
    error: {
      main: designTokens.color.primaryRed,
      dark: designTokens.color.rocketRed,
      contrastText: designTokens.color.primaryBlack,
    },
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Michaela's React MUI Theming sample</h1>
        </header>

        <main>
          <Card></Card>
        </main>
        
        <footer>
          <Button variant="contained" color="primary">
            Main CTA (contained primary)
          </Button>

          
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
