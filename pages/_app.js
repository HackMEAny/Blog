// import "../styles/globals.css";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./App.css";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
