import { motion } from "framer-motion";
import React, { Component } from "react";

import { Box, Typography } from "@mui/material";

import Navbar from "./Navbar";
export default class Author extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Box display="flex" justifyContent="center" sx={{ m: 10 }}>
          <Typography color="black" sx={{ pl: 3 }}>
            <h1>Author</h1>
          </Typography>
        </Box>
      </>
    );
  }
}
