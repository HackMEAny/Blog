import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  useMediaQuery,
  Block,
  Typography,
  Stack,
  IconButton,
  Button,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import theme from "./theme.js";

export default function Navbar() {
  const [state, setState] = React.useState({
    drawerOpen: false,
  });
  const { drawerOpen } = state;
  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  return (
    <>
      {/* Desktop navbar */}
      <AppBar
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        position="sticky"
        style={{
          background: "transparent",
          // boxShadow: "none",
          marginTop: "-50px",
          backdropFilter: "blur(20px)",
        }}
        enableColorOnDark={true}
      >
        <Toolbar>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/">
            Tag
          </Button>
          <Button color="inherit" href="/">
            Author
          </Button>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* Help */}
          </Typography>
          <Button color="inherit">About</Button>
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
        }}
        style={{
          background: "transparent",
          // boxShadow: "none",
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
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <Stack
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                flexDirection: "column",
                m: 16,
                // p: 8,
                color: "inherit",
              }}
              spacing={3}
              direction="column"
            >
              <Button color="inherit" href="/">
                Home
              </Button>
              <Button color="inherit" href="/">
                Tag
              </Button>
              <Button color="inherit" href="/">
                Author
              </Button>

              <Button color="inherit">About</Button>
            </Stack>
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
