import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Fab,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { Box, positions } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import AddIcon from "@mui/icons-material/Add";

import backimg from "./assets/back.jpg";

const CardExample = () => {
  return (
    <Card
      sx={{
        // borderBottomRightRadius: 40,
        // borderTopLeftRadius: 40,
        borderRadius: 10,
        ":hover": {
          boxShadow: 20,
        },
      }}
    >
      <Stack>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": { mt: 2, mr: 3 },
            positions: "absolute",
            justifyContent: "flex-end",
          }}
        >
          <Fab color="secondary" href="/">
            <ShareTwoToneIcon fontSize="medium" />
          </Fab>
        </Box>
        <CardActionArea sx={{ mt: -9 }}>
          <Image
            className="imageHover"
            src="https://source.unsplash.com/random"
            alt="back"
            width={800}
            height={500}
            layout="responsive"
          />
          <CardContent sx={{ m: 2, mb: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Avatar
                src="https://avatars.githubusercontent.com/u/57983431"
                sx={{ bgcolor: "red", width: 35, height: 35 }}
              >
                R
              </Avatar>
              <Typography color="black" sx={{ pl: 3 }}>
                Author
              </Typography>
            </Box>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="black" sx={{ mx: 2 }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            {/* </Stack> */}
            {/* <Button href="/" variant="contained" color="primary">
              Read More
            </Button> */}
          </CardContent>
          <CardActions>
            <Stack
              flexGrow={1}
              direction="column"
              justifyContent="space-around"
              spacing={3}
              sx={{ mx: 4, mb: 2 }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
                sx={{ mx: 1 }}
              >
                <Typography
                  color="black"
                  sx={{ borderRadius: 2, bgcolor: "red", p: 0.5 }}
                >
                  #tagsdgfdgdfgfdg
                </Typography>
                <Typography
                  color="black"
                  sx={{ borderRadius: 2, bgcolor: "red", p: 0.5 }}
                >
                  #tags
                </Typography>
                <Typography
                  color="black"
                  sx={{ borderRadius: 2, bgcolor: "red", p: 0.5 }}
                >
                  #tags
                </Typography>
              </Stack>
              <Divider variant="middle" />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
              >
                <Typography color="black">2nd March, 2020</Typography>
                {/* <Typography color="black" sx={{ flexGrow: 1 }} /> */}
                <Typography color="black">2min read</Typography>
              </Stack>
            </Stack>
          </CardActions>
        </CardActionArea>
      </Stack>
    </Card>
  );
};
export default function ActionAreaCard() {
  return (
    <>
      <Grid
        container
        spacing={8}
        justifyContent="space-around"
        alignItems="center"
        direction="row"
        sx={{ p: 5, flexGrow: 1 }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <CardExample />
        </Grid>
      </Grid>
    </>
  );
}