import { createTheme } from "@mui/material";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    type: "light",
    primary: {
      main: "#C71F3C",
      light: "#FFFFFF",
      dark: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
  },
  button: {
    textTransform: "none",
  },
  divider: "#C71F3C",
  typography: {
    fontFamily: "Poppins",
  },
});
export default theme;
