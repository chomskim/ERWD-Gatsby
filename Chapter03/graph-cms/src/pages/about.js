import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function About({ data }) {
  const {
    mdx: { body },
    graphCmsIcebreaker: { hobbies },
  } = data;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 text-center">
        <MDXRenderer>{body}</MDXRenderer>
        <div>
          <h2>Hobbies</h2>
          {hobbies.join(", ")}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    mdx(frontmatter: { type: { eq: "bio" } }) {
      body
    }
    graphCmsIcebreaker {
      hobbies
    }
  }
`;
