import React from 'react';
import { Box, Button, Card, Container, Link, Typography } from '@mui/material';
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
    custom: {
      brandRed: designTokens.color.rocketRed,
      backgroundColor: designTokens.color.white,
    },
  },

  typography: {
    h1: {
      fontWeight: designTokens.typography.h1.fontWeight,
      fontSize: designTokens.typography.h1.fontSize,
      color: designTokens.color.lightTeal,
    },
    h3: {
      fontSize: designTokens.typography.h3.fontSize,
      color: designTokens.color.darkTeal,
    },
  }
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        backgroundColor: 'custom.backgroundColor',
      }}>

        <Box component="header" 
          sx={{ 
            p: "2rem",
            backgroundColor: 'primary.dark',
          }}>
          <Typography variant="h1" align="center">Michaela's React MUI Theming sample</Typography>
        </Box>


        <Box component="main">
          <Card></Card>
        </Box>
        
        {/** begin footer **/}
        <Box component="footer"
          sx={{
            p: "2rem",
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(4, 1fr)'
          }}>
          <div className="footer__column">            
            <Button 
              variant="contained" 
              color="primary"   
              onClick={() => {console.info("I'm a CTA button.");}}
            >
              Main Call to Action
            </Button>
          </div>

          <Box className="footer__column"
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateRows: 'repeat(4, 1fr)'
            }}>          
            <Typography variant="h3">React</Typography>
            <Link href="https://mui.com/material-ui/react-link/" target="_blank" rel="noopener">React link</Link>
            <Link href="https://mui.com/material-ui/react-link/" target="_blank" rel="noopener" underline="hover">React link</Link>
            <Link href="https://mui.com/material-ui/react-link/" target="_blank" rel="noopener" color="secondary">React link</Link>
          </Box>

          <Box className="footer__column"
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateRows: 'repeat(4, 1fr)'
            }}>              
            <Typography variant="h3">About Us</Typography>
            <Link href="https://www.rocketcompanies.com/who-we-are/about-us/" target="_blank" rel="noopener">About Us</Link>
            <Link href="https://www.rocketcompanies.com/who-we-are/about-us/" target="_blank" rel="noopener" underline="hover">About Us</Link>
            <Link href="https://www.rocketcompanies.com/who-we-are/about-us/" target="_blank" rel="noopener" color="secondary">About Us</Link>
          </Box>

          <Box className="footer__column"
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateRows: 'repeat(4, 1fr)'
            }}>               
            <Typography variant="h3">Contact Us</Typography>
            <Link href="https://www.rocketcompanies.com/press-room/#Contact-Media-Relations" target="_blank" rel="noopener">Contact Us</Link>
            <Link href="https://www.rocketcompanies.com/press-room/#Contact-Media-Relations" target="_blank" rel="noopener" underline="hover">Contact Us</Link>
            <Link href="https://www.rocketcompanies.com/press-room/#Contact-Media-Relations" target="_blank" rel="noopener" color="secondary">Contact Us</Link>
          </Box>
        </Box>
        {/** end footer **/}
        
      </Container>
    </ThemeProvider>
  );
}

export default App;
