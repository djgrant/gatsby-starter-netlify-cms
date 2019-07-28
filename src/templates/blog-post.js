import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Box from '../components/atoms/box';
import Jumbotron from '../components/molecules/jumbotron';
import Layout from '../components/organisms/layout';
import HTML from '../components/organisms/html';

export const BlogPost = ({ html, description, title }) => (
  <Layout>
    <Helmet titleTemplate="%s | Blog">
      <title>{`${title}`}</title>
      <meta name="description" content={`${description}`} />
    </Helmet>
    <Jumbotron>
      <h1>{title}</h1>
      <p>{description}</p>
    </Jumbotron>
    <Box container gutter pt={[3, 4]}>
      <HTML content={html} />
    </Box>
  </Layout>
);

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;

export default ({ data }) => (
  <BlogPost
    {...data.markdownRemark.frontmatter}
    html={data.markdownRemark.html}
  />
);
