import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/app/theme';

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Abalone
            </Typography>
            <Button 
              className='mb-8' 
              variant='outlined' 
              sx={{ 
                mr: '12px' 
              }}
            >
              Se connecter</Button>
            <Button variant="contained">Inscription</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}

export default React.memo(NavBar);