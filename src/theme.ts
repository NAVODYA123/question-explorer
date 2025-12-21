import { createTheme } from "@mui/material/styles";
import { blue, purple, green, orange, red, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[600],
      dark: blue[800],
      contrastText: "#fff",
    },

    secondary: {
      light: purple[300],
      main: purple[600],
      dark: purple[800],
      contrastText: "#fff",
    },

    success: {
      light: green[300],
      main: green[600],
      dark: green[800],
      contrastText: green[800],
    },

    warning: {
      light: orange[300],
      main: orange[600],
      dark: orange[800],
      contrastText: "#000",
    },

    error: {
      light: red[300],
      main: red[600],
      dark: red[800],
      contrastText: "rgba(${main},0.68",
    },

    background: {
      default: grey[50],
      paper: "#fff",
    },

    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiChip: {
      defaultProps: {
        size: "medium",
        variant: "filled",
      },

      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6,
        },
      },
    },
  },
});
