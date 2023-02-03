import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F9F08D',
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(56 56 56 / 85%)',
          borderBottom: '1px solid #656565',
          backdropFilter: 'blur(5px)',
          color: '#E7F6FD',
        }
      }
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 500,
    }
  }
})