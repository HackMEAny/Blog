import React, { Component } from "react";

import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";

import Navbar from "./Navbar";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
        >
          <Box display="flex" justifyContent="center" sx={{ m: 10 }}>
            <Typography color="black" sx={{ pl: 3 }}>
              <h1>About</h1>
            </Typography>
          </Box>
        </motion.div>
      </>
    );
  }
}
