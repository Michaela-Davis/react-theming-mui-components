import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
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

  typography: {
    htmlFontSize: designTokens.typography.htmlFontSize,
    h1: {
      fontWeight: designTokens.typography.h1.fontWeight,
      fontSize: designTokens.typography.h1.fontSize,
    }
  }
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>

        <header>
          <Typography variant="h1" align="center">Michaela's React MUI Theming sample</Typography>
        </header>

        <main>
          <Card></Card>
        </main>
        
        <footer>
          <Button variant="contained" color="primary">
            Main CTA (contained primary)
          </Button>
          <Link href="https://mui.com/material-ui/react-link/">React link</Link>
          <Link href="https://rocketaccount.com/#/privacy-policy" color="secondary">Privacy Policy</Link>
          <Link href="https://www.rocketcompanies.com/who-we-are/about-us/">About Us</Link>
        </footer>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
