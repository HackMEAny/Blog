import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import SyntaxHighlighter from "react-syntax-highlighter";
import { MDXRemote } from "next-mdx-remote";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
import Navbar from "../Navbar";

const components = { SyntaxHighlighter };

const getStaticPaths = async () => {
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
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({ frontMatter, mdxSource }) => {
  const title = frontMatter.title;
  const date = frontMatter.date;
  const image = frontMatter.thumbnailUrl;
  const description = frontMatter.description;
  const tags = frontMatter.tags;
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
        <MDXRemote {...mdxSource} components={components} />
        {/* </div> */}
      </Stack>
    </>
  );
};
export { getStaticPaths, getStaticProps };
export default PostPage;
