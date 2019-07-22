import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/layout';
import HTML from '../components/organisms/html';

export const AboutPage = ({ html, title }) => (
  <Layout>
    <h2>{title}</h2>
    <HTML content={html} />
  </Layout>
);

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ({ data }) => (
  <AboutPage
    {...data.markdownRemark.frontmatter}
    html={data.markdownRemark.html}
  />
);
