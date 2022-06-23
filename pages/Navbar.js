import * as React from "react";
import { useEffect, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  Typography,
  Stack,
  IconButton,
  Button,
  Toolbar,
  Box,
  AppBar,
  Fab,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

import Link from "next/link";

import { motion } from "framer-motion";

// Custom navbar button (Desktop)
const StyledButtonDesktop = (props) => (
  <Link href={props.link}>
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        color="secondary"
        disableRipple
        disableFocusRipple
        sx={{
          backgroundColor: "transparent",
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {props.children}
      </Button>
    </motion.div>
  </Link>
);

// Custom navbar button (Mobile)
const StyledButtonMobile = (props) => (
  <Link href={props.link}>
    <motion.div whileTap={{ scale: 0.8 }}>
      <Button color="secondary" disableRipple>
        {props.children}
      </Button>
    </motion.div>
  </Link>
);

export default function Navbar() {
  const [state, setState] = useState({
    drawerOpen: false,
  });
  const { drawerOpen } = state;

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  // Section Start : Controlling the navbar behaviour
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 15 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  // Section End : Controlling the navbar behaviour

  return (
    <>
      {/* Desktop navbar */}
      <AppBar
        sx={{
          top: {
            md: 0,
            lg: 0,
            xl: -1,
          },
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          background: `rgba(255, 255, 255, ${backgroundTransparacy / 2})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          marginTop: "-50px",
          backdropFilter: "blur(20px)",
        }}
        position="sticky"
        enableColorOnDark={true}
      >
        <Toolbar>
          <StyledButtonDesktop link="/">Home</StyledButtonDesktop>
          <StyledButtonDesktop link="/Tag">Tag</StyledButtonDesktop>
          <StyledButtonDesktop link="/Author">Author</StyledButtonDesktop>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
          <StyledButtonDesktop link="/About">About</StyledButtonDesktop>
        </Toolbar>
      </AppBar>

      {/* Mobile & Tablet Navbar */}
      <AppBar
        position="sticky"
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          background: `rgba(255, 255, 255, ${backgroundTransparacy / 2})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          marginTop: "-50px",
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            transitionDuration={800}
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
              BackdropProps: {
                sx: {
                  backdropFilter: "blur(20px)",
                },
              },
              sx: {
                ...{
                  [`& .MuiDrawer-paper`]: {
                    width: "100%",
                    bgcolor: "transparent",
                  },
                },
              },
            }}
          >
            <Stack
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                m: 16,
              }}
              spacing={3}
              direction="column"
            >
              <StyledButtonMobile link="/">Home</StyledButtonMobile>
              <StyledButtonMobile link="/Tag">Tag</StyledButtonMobile>
              <StyledButtonMobile link="/Author">Author</StyledButtonMobile>
              <StyledButtonMobile link="/About">About</StyledButtonMobile>
            </Stack>

            <Box
              sx={{
                display: "flex",
                "& > :not(style)": { mb: 5 },
                positions: "absolute",
                justifyContent: "center",
              }}
            >
              <Fab color="secondary" onClick={handleDrawerClose}>
                <ClearRoundedIcon fontSize="large" />
              </Fab>
            </Box>
          </Drawer>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
