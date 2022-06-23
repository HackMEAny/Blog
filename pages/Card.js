import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardActionArea,
  CardActions,
  Divider,
  Fab,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";

import { motion } from "framer-motion";

const Animate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

export const CardExample = (url) => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delayChildren: 0.1, staggerChildren: 1 }}
    >
      <motion.div variants={Animate}>
        <Card
          className="cardWrapper"
          sx={{
            borderRadius: 10,
            ":hover": {
              boxShadow: 20,
            },
            maxHeight: 1000,
            maxWidth: 400,
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
                className="img"
                src="https://source.unsplash.com/random"
                alt="back"
                width={800}
                height={500}
                layout="responsive"
              />
              <motion.div variants={Animate}>
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica Lizards are a widespread group of squamate
                    reptiles, with over 6,000 species, ranging across all con
                  </Typography>
                </CardContent>
              </motion.div>
              <motion.div variants={Animate}>
                <CardActions>
                  <Stack
                    flexGrow={1}
                    direction="column"
                    justifyContent="space-around"
                    spacing={3}
                    sx={{ mx: { xs: 1, md: 2, lg: 4, xl: 4 }, mb: 2 }}
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
              </motion.div>
            </CardActionArea>
          </Stack>
        </Card>
      </motion.div>
    </motion.div>
  );
};
// export const getStaticProps = async () => {
//   const files = fs.readdirSync(path.join("posts"));
//   console.log(files);
//   const posts = files.map((filename) => {
//     const markdownWithMeta = fs.readFileSync(path.join("posts", filename));

//     const { data: frontMatter } = matter(markdownWithMeta);

//     return {
//       frontMatter,
//       slug: filename.split(".")[0],
//     };
//   });
//   console.log(posts);
//   return {
//     props: {
//       posts,
//     },
//   };
// };
// export default function ActionAreaCard({ posts }) {
//   return (
//     <>
//       <Grid
//         container
//         spacing={8}
//         justifyContent="space-around"
//         alignItems="center"
//         direction="row"
//         sx={{ p: 5, flexGrow: 1 }}
//       >
//         {posts.map((post, index) => (
//           <Grid item key={index} xs={12} md={6} lg={3}>
//             <CardExample url={post.slug} />
//           </Grid>
//         ))}
//         {/* <Grid item xs={12} md={6} lg={3}>
//           <CardExample />
//         </Grid>
//         <Grid item xs={12} md={6} lg={3}>
//           <CardExample />
//         </Grid>
//         <Grid item xs={12} md={6} lg={3}>
//           <CardExample />
//         </Grid>
//         <Grid item xs={12} md={6} lg={3}>
//           <CardExample />
//         </Grid> */}
//       </Grid>
//     </>
//   );
// }
