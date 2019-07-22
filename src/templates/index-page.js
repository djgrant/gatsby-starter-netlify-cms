import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/layout';
import HTML from '../components/organisms/html';

export const IndexPage = ({ title, list, html }) => (
  <Layout>
    <h1>{title}</h1>
    <HTML content={html} />
  </Layout>
);

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ({ data }) => (
  <IndexPage
    html={data.markdownRemark.html}
    {...data.markdownRemark.frontmatter}
  />
);
