import React, { Component } from "react";

import { Box, Typography } from "@mui/material";

import Navbar from "./Navbar";
export default class Tag extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Box display="flex" justifyContent="center" sx={{ m: 10 }}>
          <Typography color="black" sx={{ pl: 3 }}>
            <h1>Tag</h1>
          </Typography>
        </Box>
      </>
    );
  }
}
