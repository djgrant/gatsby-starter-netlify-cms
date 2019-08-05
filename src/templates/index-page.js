import React from 'react';
import { graphql } from 'gatsby';
import Box from '../components/atoms/box';
import Article from '../components/atoms/article';
import Jumbotron from '../components/molecules/jumbotron';
import Layout from '../components/organisms/layout';
import HTML from '../components/organisms/html';

export const IndexPage = ({ title, image, list, html }) => (
  <Layout>
    <Jumbotron image={image} />
    <Box container gutter py={[4, 5]}>
      <Article>
        <h2>{title}</h2>
        <HTML content={html} />
      </Article>
    </Box>
  </Layout>
);

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
