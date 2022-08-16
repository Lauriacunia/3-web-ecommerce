import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Transform } from '@mui/icons-material';

const Header = () => {
 const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "space-between",
                     backgroundColor: 'black',
                     height: '100px',
                },
            },
        },
    },
    });

 return (
 
    
 <ThemeProvider theme={theme}>
        <AppBar  position="sticky">
            <Toolbar>
                <Grid container spacing={2}  
                  direction="row"
                  alignItems="center">
                  <Grid item sx={ { cursor: 'pointer' } }>
                  <img 
                     src = "https://user-images.githubusercontent.com/63796774/175135690-c16823ec-0808-4903-8d57-b8257983cde2.png" />
                  </Grid>
                  
                </Grid>
                <Grid container spacing={2} 
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center">
                    <Avatar alt="Remy Sharp"  sx={{ width: 45, height: 45, marginRight: '25px', cursor: 'pointer'  }} src="https://user-images.githubusercontent.com/63796774/175137557-ce74ef5f-cea9-4783-8c5c-c890a6ce38a8.jpeg" />
                    <ShoppingCartOutlinedIcon  sx={{ color: 'white', fontSize: 30, marginRight: '25px', cursor: 'pointer'  }} />
                    <SettingsIcon   sx={{ color: 'white', fontSize: 30, cursor: 'pointer'  }} />
                </Grid>
            </Toolbar>
        </AppBar>
 </ThemeProvider>
       
  
    );
  
}

export default Header