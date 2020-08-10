import * as React from "react";
import { GetStaticProps } from "next";
import { createGetMarkdownStaticProps } from "../utils";
import Markdown from "../components/Markdown";
import Header from "../components/Header";

interface IndexProps {
  content: string;
}

export default function Index({ content }: IndexProps): JSX.Element {
  return (
    <>
      <div className="max-w-lg mx-auto px-4">
        <Header />
        <Markdown content={content} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = createGetMarkdownStaticProps(
  "home"
);
