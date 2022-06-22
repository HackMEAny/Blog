import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import App from "./App";
// import "./App.css";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
