import React from 'react';
import { graphql } from 'gatsby';
import Box from '../components/atoms/box';
import Jumbotron from '../components/molecules/jumbotron';
import Layout from '../components/organisms/layout';
import HTML from '../components/organisms/html';

export const AboutPage = ({ html, title }) => (
  <Layout>
    <Jumbotron bg="grey.0">
      <h1>{title}</h1>
    </Jumbotron>
    <Box container gutter pt={[3, 4]}>
      <HTML content={html} />
    </Box>
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
