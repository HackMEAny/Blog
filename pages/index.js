import Image from "next/image";
import Link from "next/link";

import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, Grid, Stack } from "@mui/material";

// import App from "./App";
import theme from "./theme";
import Navbar from "./Navbar";
import { CardExample } from "./Card";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { motion } from "framer-motion";

import backimg from "./assets/back.jpg";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename));
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

// export default function Home() {
//   return (
//     <ThemeProvider theme={theme}>
//       <App  />
//     </ThemeProvider>
//   );
// }

export default function Home({ posts }) {
  return (
    <ThemeProvider theme={theme}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Stack bgcolor="white" direction="column" sx={{ width: "100%" }}>
          <Image src={backimg} alt="background" height="400vh" />

          <Navbar />
          <Box display="flex" justifyContent="center" sx={{ m: 3 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 4, lg: 1, xl: 3 }}
              justifyContent="space-around"
              alignItems="center"
              direction="row"
              sx={{ flexGrow: 1 }}
            >
              {posts.map((post, index) => (
                <Link href={"/blog/" + post.slug} passHref key={index}>
                  <Grid item sx={{ p: 0 }}>
                    <CardExample frontMatter={post} />
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Box>
        </Stack>
      </motion.div>
    </ThemeProvider>
  );
}
