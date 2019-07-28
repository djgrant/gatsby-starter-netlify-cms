import React from 'react';
import Box from '../../components/atoms/box';
import Jumbotron from '../../components/molecules/jumbotron';
import Layout from '../../components/organisms/layout';
import BlogRoll from '../../components/organisms/blog-roll';

const BlogPage = () => (
  <Layout>
    <Jumbotron>
      <h1>Latest Stories</h1>
    </Jumbotron>
    <Box container gutter pt={[3, 4]}>
      <BlogRoll />
    </Box>
  </Layout>
);

export default BlogPage;
