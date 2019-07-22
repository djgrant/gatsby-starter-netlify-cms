import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/organisms/layout';
import HTML from '../components/organisms/html';

export const BlogPost = ({ html, description, tags, title }) => (
  <Layout>
    <Helmet titleTemplate="%s | Blog">
      <title>{`${title}`}</title>
      <meta name="description" content={`${description}`} />
    </Helmet>
    <h1>{title}</h1>
    <p>{description}</p>
    <HTML content={html} />
    {tags && tags.length ? (
      <div>
        <h4>Tags</h4>
        <ul>
          {tags.map(tag => (
            <li key={tag + `tag`}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    ) : null}
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
        tags
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
