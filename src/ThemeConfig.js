import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#e9edee",
          margin: 0,
          padding: 0,
          fontFamily: 'Roboto, sans-serif',
          color: "#606060",
        },
        img: {
          width: "100%",
        }
      }
    }
  }
  
});


export default theme