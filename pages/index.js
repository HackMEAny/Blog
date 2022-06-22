import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { ThemeProvider } from "@mui/material/styles";
import { Grid, Stack } from "@mui/material";

// import App from "./App";
import theme from "./theme";
import Navbar from "./Navbar";
import { CardExample } from "./Card";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

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
      <Stack bgcolor="white" direction="column" sx={{ width: "100%" }}>
        <Image
          src={backimg}
          alt="background"
          // layout="intrinsic"
          width="1000vw"
          height="400vh"
        />

        <Navbar />
        <Grid
          container
          spacing={8}
          justifyContent="space-around"
          alignItems="center"
          direction="row"
          sx={{ p: 5, flexGrow: 1 }}
        >
          {posts.map((post, index) => (
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <Grid item xs={12} md={6} lg={3}>
                <CardExample />
              </Grid>
            </Link>
          ))}
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
