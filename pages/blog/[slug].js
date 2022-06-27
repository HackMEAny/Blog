import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import { Container, Stack } from "@mui/material";
import Image from "next/image";

import Navbar from "../Navbar";
import custom from "../Custom";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behaviour: "wrap" }],
        [rehypePrism, { showLineNumbers: true }],
      ],
    },
  });
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
}

const PostPage = ({ frontMatter, mdxSource }) => {
  console.log(frontMatter);
  const title = frontMatter.title;
  const date = frontMatter.date;
  const image = frontMatter.thumbnailUrl;
  const description = frontMatter.description;
  const tags = frontMatter.tags;
  // const content = serialize(mdxSource);
  return (
    <>
      <Navbar />
      <Stack>
        <Container>
          <Image
            src={image}
            alt="background"
            layout="intrinsic"
            width={1200}
            height={800}
          />
        </Container>
        <h2 style={{ marginTop: "70px" }}>{title}</h2>
        <h5> Written in {date}</h5>
        <p>{description}</p>
        {/* <MDXComponents frontMatter={mdxSource}>{mdxSource}</MDXComponents> */}
        <MDXRemote {...mdxSource} components={custom} />
      </Stack>
    </>
  );
};

export default PostPage;
