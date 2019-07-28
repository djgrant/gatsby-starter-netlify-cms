import React from 'react';
import { graphql } from 'gatsby';
import Box from '../components/atoms/box';
import Jumbotron from '../components/molecules/jumbotron';
import Layout from '../components/organisms/layout';
import HTML from '../components/organisms/html';

export const IndexPage = ({ title, list, html }) => (
  <Layout>
    <Jumbotron>
      <h1>{title}</h1>
    </Jumbotron>
    <Box container gutter pt={[3, 4]}>
      <HTML content={html} />
    </Box>
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
